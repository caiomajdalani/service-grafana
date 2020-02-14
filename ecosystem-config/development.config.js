module.exports = {
    apps : [{
        name: "service-reports",
        script: "./src/index.js",
        instances: "1",
        exec_mode: "cluster",
        error_file: "./logs/pm2/api_error.log",
        out_file: "./logs/pm2/api_out.log",
        ignore_watch: [
            "node_modules",
            ".DS_Store",
            ".vscode",
            "logs",
            ".git",
            "coverage",
            "Dockerfie",
            "docker-compose.yml"
        ],
        trace: true,
        watch: true,
        env: {
            API: {
                HOST: "localhost",
                VERSION: "v1",
                PORT: 8181,
                REQUEST: {
                    LIMIT: "100mb",
                    EXTENDED: true,
                    LOG: "local"
                }
            },
            MYSQL: {
                DATABASE: "reports",
                USERNAME: "root",
                PASSWORD: "admin",
                HOST: "mysqldb",
                PORT: 3306
            },
            ENVIRONMENT: "DEVELOPMENT",
            NODE_ENV: "develop"
        }
    }]
}