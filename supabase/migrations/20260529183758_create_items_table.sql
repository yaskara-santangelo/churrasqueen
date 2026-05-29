create table public.items (
    id uuid primary key default gen_random_uuid(),
    event_id uuid not null references public.events(id) on delete cascade,
    name text not null,
    estimated_cost numeric(10, 2) check (estimated_cost >= 0),
    assigned_guest_id uuid references public.guests(id) on delete set null,
    created_at timestamptz not null default now()
);

create index items_event_id_idx on public.items(event_id);
create index items_assigned_guest_id_idx on public.items(assigned_guest_id);

alter table public.items enable row level security;

create policy "items: public read"
    on public.items
    for select
    using (true);

create policy "items: host insert"
    on public.items
    for insert
    with check (
        exists (
            select 1 from public.events
            where events.id = items.event_id
            and events.host_id = auth.uid()
        )
    );

create policy "items: public update"
    on public.items
    for update
    using (true);

create policy "items: host delete"
    on public.items
    for delete
    using (
        exists (
            select 1 from public.events
            where events.id = items.event_id
            and events.host_id = auth.uid()
        )
    );