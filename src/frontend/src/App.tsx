import Layout from "@/components/Layout";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const InstantFundingPage = lazy(() => import("@/pages/InstantFundingPage"));
const ChallengeAccountsPage = lazy(
  () => import("@/pages/ChallengeAccountsPage"),
);
const PrimeAccountsPage = lazy(() => import("@/pages/PrimeAccountsPage"));
const AffiliateProgramPage = lazy(() => import("@/pages/AffiliateProgramPage"));
const PayoutProofsPage = lazy(() => import("@/pages/PayoutProofsPage"));
const TradingRulesPage = lazy(() => import("@/pages/TradingRulesPage"));
const FAQPage = lazy(() => import("@/pages/FAQPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage"));
const PartnerProgramPage = lazy(() => import("@/pages/PartnerProgramPage"));
const DashboardLoginPage = lazy(() => import("@/pages/DashboardLoginPage"));
const ReviewsPage = lazy(() => import("@/pages/ReviewsPage"));
const TradingCalculatorPage = lazy(
  () => import("@/pages/TradingCalculatorPage"),
);

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-2 border-brand-gold/20 border-t-brand-gold animate-spin" />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <HomePage />,
});
const instantFundingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/instant-funding",
  component: () => <InstantFundingPage />,
});
const challengeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/challenge-accounts",
  component: () => <ChallengeAccountsPage />,
});
const primeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/prime-accounts",
  component: () => <PrimeAccountsPage />,
});
const affiliateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/affiliate",
  component: () => <AffiliateProgramPage />,
});
const payoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payout-proofs",
  component: () => <PayoutProofsPage />,
});
const rulesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trading-rules",
  component: () => <TradingRulesPage />,
});
const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/faq",
  component: () => <FAQPage />,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => <AboutPage />,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: () => <ContactPage />,
});
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: () => <BlogPage />,
});
const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: () => <BlogPostPage />,
});
const partnerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partner-program",
  component: () => <PartnerProgramPage />,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard-login",
  component: () => <DashboardLoginPage />,
});
const reviewsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reviews",
  component: () => <ReviewsPage />,
});
const calculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/calculator",
  component: () => <TradingCalculatorPage />,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  instantFundingRoute,
  challengeRoute,
  primeRoute,
  affiliateRoute,
  payoutRoute,
  rulesRoute,
  faqRoute,
  aboutRoute,
  contactRoute,
  blogRoute,
  blogPostRoute,
  partnerRoute,
  loginRoute,
  reviewsRoute,
  calculatorRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
