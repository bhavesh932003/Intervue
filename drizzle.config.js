/** @type { import("drizzle-kit").Config} */
export default{
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:AunZybv61Hsw@ep-rapid-bonus-a547pnki.us-east-2.aws.neon.tech/intervue?sslmode=require',
    }
};