-- ============================================================
-- MYFITFORM — SCHEMA SUPABASE
-- Executar de uma só vez no SQL Editor do projeto Supabase.
-- ============================================================

create extension if not exists "pgcrypto";

-- ------------------------------------------------------------
-- FASE 1 — CONTA + PERFIL (em uso já nesta fase)
-- ------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text,
  age int,
  sex text,
  height_cm numeric,
  weight_kg numeric,
  activity_level text,       -- Sedentário / Pouco ativo / Moderadamente ativo / Muito ativo
  experience text,           -- Iniciante / Intermediário / Avançado
  onboarding_complete boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.goals (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  goal_key text not null,    -- perder | ganhar | recomp | postura | condic | saude
  created_at timestamptz not null default now(),
  unique(profile_id, goal_key)
);

create table public.training_setup (
  profile_id uuid primary key references public.profiles(id) on delete cascade,
  location text,             -- casa | ginasio | exterior
  equipment text[] not null default '{}',
  updated_at timestamptz not null default now()
);

-- ------------------------------------------------------------
-- FASE 2/3 — AVALIAÇÃO CORPORAL (tabelas já criadas, uso a partir da Fase 2)
-- ------------------------------------------------------------

create table public.assessments (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  weight_kg numeric,
  imc numeric,
  body_fat_pct numeric,
  muscle_mass_kg numeric,
  skeletal_muscle_pct numeric,
  bmr_kcal numeric,
  visceral_fat numeric,
  body_water_pct numeric,
  estimate_source text not null default 'mvp_estimate'
    check (estimate_source in ('mvp_estimate','ai_model')),
  is_estimate boolean not null default true
);

create table public.assessment_photos (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  angle text not null check (angle in ('front','right','left','back')),
  storage_path text not null,   -- caminho no bucket privado 'body-photos'
  created_at timestamptz not null default now()
);

create table public.posture_observations (
  id uuid primary key default gen_random_uuid(),
  assessment_id uuid not null references public.assessments(id) on delete cascade,
  label text not null,          -- ex: "Possível assimetria dos ombros"
  severity text not null default 'info' check (severity in ('info','attention')),
  description text not null
);

-- ------------------------------------------------------------
-- FASE 4 — TREINO PERSONALIZADO (tabelas já criadas, uso a partir da Fase 4)
-- ------------------------------------------------------------

create table public.exercises (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  video_url text,
  instructions text,
  sets int,
  reps text,
  rest_seconds int,
  difficulty text,
  muscles text
);

create table public.training_plans (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  objective_summary text,
  frequency_per_week int,
  duration_minutes_range text,
  location text,
  equipment text[] default '{}',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.plan_days (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid not null references public.training_plans(id) on delete cascade,
  day_of_week text not null,   -- SEG, TER, QUI, SÁB...
  label text not null          -- "Full Body", "Cardio + Core"...
);

create table public.plan_day_exercises (
  id uuid primary key default gen_random_uuid(),
  plan_day_id uuid not null references public.plan_days(id) on delete cascade,
  exercise_id uuid not null references public.exercises(id) on delete cascade,
  order_index int not null default 0
);

create table public.workout_sessions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  plan_day_id uuid references public.plan_days(id),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  status text not null default 'in_progress' check (status in ('in_progress','completed'))
);

create table public.workout_session_exercises (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.workout_sessions(id) on delete cascade,
  exercise_id uuid not null references public.exercises(id),
  completed boolean not null default false
);

-- ------------------------------------------------------------
-- FASE 5 — NUTRIÇÃO (tabelas já criadas, uso a partir da Fase 5)
-- ------------------------------------------------------------

create table public.meals (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  photo_storage_path text,      -- caminho no bucket privado 'meal-photos'
  logged_at timestamptz not null default now(),
  source text not null default 'manual' check (source in ('manual','ai')),
  total_kcal numeric,
  protein_g numeric,
  carbs_g numeric,
  fat_g numeric,
  fiber_g numeric,
  is_estimate boolean not null default true
);

create table public.meal_items (
  id uuid primary key default gen_random_uuid(),
  meal_id uuid not null references public.meals(id) on delete cascade,
  name text not null,
  emoji text,
  qty numeric not null default 1,
  kcal numeric default 0,
  protein_g numeric default 0,
  carbs_g numeric default 0,
  fat_g numeric default 0,
  fiber_g numeric default 0
);

-- ------------------------------------------------------------
-- FASE 6 — PROGRESSO (tabela já criada, uso a partir da Fase 6)
-- ------------------------------------------------------------

create table public.progress_snapshots (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  snapshot_date date not null default current_date,
  weight_kg numeric,
  body_fat_pct numeric,
  muscle_mass_kg numeric,
  workouts_completed int default 0,
  consistency_pct numeric
);

-- ------------------------------------------------------------
-- FASE 7 — MYFITFORM AI (tabela já criada, uso a partir da Fase 7)
-- ------------------------------------------------------------

create table public.ai_conversations (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  role text not null check (role in ('user','assistant')),
  content text not null,
  created_at timestamptz not null default now()
);

-- ============================================================
-- ROW LEVEL SECURITY — cada utilizador só acede aos seus dados
-- ============================================================

alter table public.profiles enable row level security;
alter table public.goals enable row level security;
alter table public.training_setup enable row level security;
alter table public.assessments enable row level security;
alter table public.assessment_photos enable row level security;
alter table public.posture_observations enable row level security;
alter table public.training_plans enable row level security;
alter table public.plan_days enable row level security;
alter table public.plan_day_exercises enable row level security;
alter table public.workout_sessions enable row level security;
alter table public.workout_session_exercises enable row level security;
alter table public.meals enable row level security;
alter table public.meal_items enable row level security;
alter table public.progress_snapshots enable row level security;
alter table public.ai_conversations enable row level security;
alter table public.exercises enable row level security;

-- profiles: o próprio utilizador
create policy "own profile" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

-- tabelas com profile_id direto
create policy "own goals" on public.goals
  for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

create policy "own training_setup" on public.training_setup
  for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

create policy "own assessments" on public.assessments
  for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

create policy "own training_plans" on public.training_plans
  for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

create policy "own workout_sessions" on public.workout_sessions
  for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

create policy "own meals" on public.meals
  for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

create policy "own progress_snapshots" on public.progress_snapshots
  for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

create policy "own ai_conversations" on public.ai_conversations
  for all using (auth.uid() = profile_id) with check (auth.uid() = profile_id);

-- tabelas ligadas indiretamente (via assessment_id / plan_id / session_id / meal_id)
create policy "own assessment_photos" on public.assessment_photos
  for all using (exists (
    select 1 from public.assessments a
    where a.id = assessment_photos.assessment_id and a.profile_id = auth.uid()
  ));

create policy "own posture_observations" on public.posture_observations
  for all using (exists (
    select 1 from public.assessments a
    where a.id = posture_observations.assessment_id and a.profile_id = auth.uid()
  ));

create policy "own plan_days" on public.plan_days
  for all using (exists (
    select 1 from public.training_plans p
    where p.id = plan_days.plan_id and p.profile_id = auth.uid()
  ));

create policy "own plan_day_exercises" on public.plan_day_exercises
  for all using (exists (
    select 1 from public.plan_days d
    join public.training_plans p on p.id = d.plan_id
    where d.id = plan_day_exercises.plan_day_id and p.profile_id = auth.uid()
  ));

create policy "own workout_session_exercises" on public.workout_session_exercises
  for all using (exists (
    select 1 from public.workout_sessions s
    where s.id = workout_session_exercises.session_id and s.profile_id = auth.uid()
  ));

create policy "own meal_items" on public.meal_items
  for all using (exists (
    select 1 from public.meals m
    where m.id = meal_items.meal_id and m.profile_id = auth.uid()
  ));

-- biblioteca de exercícios: leitura pública para todos os utilizadores autenticados
create policy "read exercises" on public.exercises
  for select using (auth.role() = 'authenticated');

-- ============================================================
-- STORAGE — buckets privados para fotografias
-- ============================================================

insert into storage.buckets (id, name, public)
values ('body-photos', 'body-photos', false)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('meal-photos', 'meal-photos', false)
on conflict (id) do nothing;

-- cada utilizador só acede à sua própria pasta: body-photos/{user_id}/...
create policy "own body photos" on storage.objects
  for all using (bucket_id = 'body-photos' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'body-photos' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "own meal photos" on storage.objects
  for all using (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'meal-photos' and (storage.foldername(name))[1] = auth.uid()::text);

-- ============================================================
-- Trigger: cria automaticamente a linha em profiles ao registar
-- ============================================================

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id) values (new.id);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
