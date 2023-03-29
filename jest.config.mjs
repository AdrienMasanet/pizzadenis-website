import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  moduleNameMapper: {
    "^@/mocks/(.*)$": "<rootDir>/__mocks__/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/context/(.*)$": "<rootDir>/context/$1",
    "^@/hooks/(.*)$": "<rootDir>/hooks/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/services/(.*)$": "<rootDir>/services/$1",
    "^@/utils/(.*)$": "<rootDir>/utils/$1",
    "^@/data/(.*)$": "<rootDir>/data/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["components/**/*.{js,jsx,ts,tsx}", "context/**/*.{js,jsx,ts,tsx}", "hooks/**/*.{js,jsx,ts,tsx}", "pages/**/*.{js,jsx,ts,tsx}", "services/**/*.{js,jsx,ts,tsx}", "utils/**/*.{js,jsx,ts,tsx}"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
