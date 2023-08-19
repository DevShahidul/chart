import {
    AppLayout,
    RootLayout
} from "@components/layouts";
import {
    HomePage,
    TestPage
} from "@pages";
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
                        path: '/',
                        element: <HeatMap />
                    }
                ]
            },
        ]
    }
]