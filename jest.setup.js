/* eslint-disable @typescript-eslint/no-require-imports */
import "@testing-library/jest-dom";
import "jest-fetch-mock";

// Mock global fetch para pruebas
global.fetch = require("jest-fetch-mock");
