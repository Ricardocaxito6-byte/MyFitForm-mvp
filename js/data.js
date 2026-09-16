async function dataGetProfile(userId) {
  const { data, error } = await sb
    .from("profiles")
    .select("*, goals(goal_key), training_setup(location, equipment)")
    .eq("id", userId)
    .single();
  return { data, error };
}

async function dataSaveProfile(userId, profile) {
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
