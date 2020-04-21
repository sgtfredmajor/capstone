create table users (
    id serial primary key,
    first_name varchar,
    last_name varchar,
    email varchar,
    user_password varchar,
    is_admin varchar,
    contact_me varchar
)

create table companies (
    id serial primary key,
    company_name varchar
)

create table applications (
    id serial primary key,
    user_id integer references users(id),
    company_id integer references companies(id),
    city varchar,
    position varchar,
    application_date date,
    offer_extended varchar,
    make_public int
)

create table interviews (
    id serial primary key,
    user_id integer references users(id),
    application_id integer references applications(id),
    company_id integer references companies(id),
    round varchar,
    interview_type varchar,
    interview_date date,
    interview_rating varchar,
    whiteboarding varchar,
    comments varchar
)