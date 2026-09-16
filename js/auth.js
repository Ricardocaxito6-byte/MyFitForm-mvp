async function authSignUp(email, password) {
  return await sb.auth.signUp({ email, password });
}

async function authSignIn(email, password) {
  return await sb.auth.signInWithPassword({ email, password });
}

async function authSignOut() {
  return await sb.auth.signOut();
}

async function authGetSession() {
  const { data } = await sb.auth.getSession();
  return data.session;
}

async function authGetCurrentUser() {
  const { data } = await sb.auth.getUser();
  return data.user;
}

async function authDeleteAccount() {
  const user = await authGetCurrentUser();
  if (!user) return { error: "Sem sessão ativa" };
  const { error } = await sb.from("profiles").delete().eq("id", user.id);
  if (!error) await authSignOut();
  return { error };
}
