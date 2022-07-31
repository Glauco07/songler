import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { queryClient } from "./services/queryClient";
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
<script src="https://e-cdns-files.dzcdn.net/js/min/dz.js"></script>;

const persister = createSyncStoragePersister({
  storage: window.localStorage,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{ persister }}
  >
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </PersistQueryClientProvider>
);
