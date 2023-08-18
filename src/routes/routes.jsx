import {
    AppLayout,
    RootLayout
} from "@components/layouts";
import {
    HomePage,
    TestPage
} from "@pages";
import HeatmapComponent from "@pages/HeatMap2";
import { HeatMap } from "@pages/index";

export const routes = [
    {
        element: <RootLayout />,
        children: [
            {
                element: <AppLayout />,
                children: [
                    {
                        path: '/index.html',
                        element: <HomePage />
                    },
                    {
                        path: '/test',
                        element: <TestPage />
                    },
                    {
                        path: '/heatmap',
                        element: <HeatMap />
                    },
                    {
                        path: '/heatmapcom',
                        element: <HeatmapComponent />
                    }
                ]
            },
            //ADD OTHER LAYOUTS HERE (i.e. AuthLayout)
            // {
            //     element: <AuthLayout />,
            //     childre: [
            //         {
            //             path: '/auth',
            //             element: <AuthPage />
            //         }
            //     ]
            // }
        ]
    }
]