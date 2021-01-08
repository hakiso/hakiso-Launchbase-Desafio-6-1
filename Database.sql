CREATE TABLE "customers" (
  "id" integer PRIMARY KEY,
  "image" text,
  "name" text,
  "cpf" integer UNIQUE,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "agencies" (
  "id" integer PRIMARY KEY,
  "street" text,
  "city" text,
  "state" text,
  "cep" integer,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "addresses" (
  "id" integer PRIMARY KEY,
  "image" text,
  "name" text,
  "addresses_id" integer UNIQUE,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "cars" (
  "id" integer PRIMARY KEY,
  "color" text,
  "car_plate" text,
  "price" integer,
  "year" timestamp,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now()),
  "models_id" integer
);

CREATE TABLE "models" (
  "id" integer PRIMARY KEY,
  "model" text,
  "type" text,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "orders" (
  "id" integer PRIMARY KEY,
  "period_start" timestamp,
  "period_end" timestamp,
  "total_price" integer,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now()),
  "agencies_id" integer,
  "customers_id" integer
);

CREATE TABLE "cars_orders" (
  "id" integer PRIMARY KEY,
  "cars_id" integer,
  "orders_id" integer,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

ALTER TABLE "cars" ADD FOREIGN KEY ("models_id") REFERENCES "models" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("agencies_id") REFERENCES "agencies" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customers_id") REFERENCES "customers" ("id");

ALTER TABLE "cars_orders" ADD FOREIGN KEY ("cars_id") REFERENCES "cars" ("id");

ALTER TABLE "cars_orders" ADD FOREIGN KEY ("orders_id") REFERENCES "orders" ("id");

ALTER TABLE "agencies" ADD FOREIGN KEY ("id") REFERENCES "addresses" ("addresses_id");
