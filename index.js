require('dotenv').config();

async function runWorkflow() {
    try {
        console.log("🚀 Starting Bus Automation Workflow...");

        await require("./step1-fetch");
        await require("./step2-calc");
        await require("./step3-store");
        await require("./step4-broadcast");
        await require("./step5-email");

        console.log("✅ Workflow completed successfully.");
        process.exit(0);

    } catch (error) {
        console.error("❌ Workflow failed:", error.message);
        process.exit(1);
    }
}

runWorkflow();