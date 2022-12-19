import { Box } from "./Box.js";

export const Layout = ({ children }) => (
  <main>
    <Box
      css={{
        maxW: "100%"
      }}
    >
      { children }
    </Box>
  </main>
);