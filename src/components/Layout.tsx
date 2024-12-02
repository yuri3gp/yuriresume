import React from "react";
import { Container } from "@mui/system";
import { SnackbarProvider } from "notistack";
import '../tailwind.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={3}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Container maxWidth={false} sx={{ color: "black", mt: 2, mb: 2 }}>
          {children}
        </Container>
      </SnackbarProvider>
    </div>
  );
}
