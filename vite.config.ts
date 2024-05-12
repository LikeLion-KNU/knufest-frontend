import { loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [
            react(),
            tsconfigPaths(),
            createHtmlPlugin({
                minify: true,
                inject: {
                    data: {
                        VITE_GOOGLE_ANALYTICS: env.VITE_GOOGLE_ANALYTICS,
                    },
                },
            }),
        ],
    };
};
