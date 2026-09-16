// ============================================================
// ACESSO A DADOS — Fase 1: perfil, objetivos, local/equipamento
// ============================================================

async function dataGetProfile(userId) {
  const { data, error } = await sb
    .from("profiles")
    .select("*, goals(goal_key), training_setup(location, equipment)")
    .eq("id", userId)
    .single();
  return { data, error };
}

async function dataSaveProfile(userId, profile) {
  // profile: { name, age, sex, height_cm, weight_kg, activity_level, experience }
  const { error } = await sb
    .from("profiles")
    .update({ ...profile, updated_at: new Date().toISOString() })
    .eq("id", userId);
  return { error };
}

async function dataMarkOnboardingComplete(userId) {
  const { error } = await sb
    .from("profiles")
    .update({ onboarding_complete: true })
    .eq("id", userId);
  return { error };
}

async function dataSaveGoals(userId, goalKeys) {
  // Substitui os objetivos existentes pelos selecionados agora.
  await sb.from("goals").delete().eq("profile_id", userId);
  if (!goalKeys.length) return { error: null };
  const rows = goalKeys.map((goal_key) => ({ profile_id: userId, goal_key }));
  const { error } = await sb.from("goals").insert(rows);
  return { error };
}

async function dataSaveTrainingSetup(userId, location, equipment) {
  const { error } = await sb
    .from("training_setup")
    .upsert({ profile_id: userId, location, equipment, updated_at: new Date().toISOString() });
  return { error };
}

// ============================================================
// FASE 2 — AVALIAÇÃO CORPORAL: fotos reais + estimativas placeholder
// ============================================================

async function dataCreateAssessment(userId) {
  const { data, error } = await sb
    .from("assessments")
    .insert({ profile_id: userId })
    .select()
    .single();
  return { data, error };
}

async function dataUploadBodyPhoto(userId, assessmentId, angle, file) {
  const path = `${userId}/${assessmentId}/${angle}.jpg`;
  const { error } = await sb.storage
    .from("body-photos")
    .upload(path, file, { upsert: true, contentType: file.type || "image/jpeg" });
  return { path, error };
}

async function dataSaveAssessmentPhoto(assessmentId, angle, storagePath) {
  const { error } = await sb
    .from("assessment_photos")
    .insert({ assessment_id: assessmentId, angle, storage_path: storagePath });
  return { error };
}

async function dataSaveAssessmentEstimates(assessmentId, estimates) {
  const { error } = await sb.from("assessments").update(estimates).eq("id", assessmentId);
  return { error };
}

async function dataSavePostureObservations(assessmentId, observations) {
  const rows = observations.map((o) => ({ assessment_id: assessmentId, ...o }));
  const { error } = await sb.from("posture_observations").insert(rows);
  return { error };
}

// ============================================================
// FASE 5 — NUTRIÇÃO: foto real + registo manual de refeição
// ============================================================

async function dataUploadMealPhoto(userId, file) {
  const path = `${userId}/${Date.now()}.jpg`;
  const { error } = await sb.storage
    .from("meal-photos")
    .upload(path, file, { upsert: true, contentType: file.type || "image/jpeg" });
  return { path, error };
}

async function dataSaveMeal(userId, photoPath, totals, items) {
  const { data, error } = await sb
    .from("meals")
    .insert({
      profile_id: userId,
      photo_storage_path: photoPath,
      total_kcal: totals.kcal,
      protein_g: totals.protein,
      carbs_g: totals.carbs,
      fat_g: totals.fat,
      fiber_g: totals.fiber,
      source: "manual",
      is_estimate: true,
    })
    .select()
    .single();
  if (error) return { error };

  const rows = items
    .filter((i) => i.qty > 0)
    .map((i) => ({
      meal_id: data.id,
      name: i.name,
      emoji: i.emoji,
      qty: i.qty,
      kcal: i.kcal,
      protein_g: i.protein,
      carbs_g: i.carbs,
      fat_g: i.fat,
      fiber_g: i.fiber,
    }));
  if (rows.length) await sb.from("meal_items").insert(rows);
  return { data, error: null };
}
