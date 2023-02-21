import { Router } from "express";
import indexPage from "./pages/index";
import usersService from "./services/users";
import todoPage from './pages/todo'

export const router = Router()
  .get("/", indexPage)
  .get("/todo", todoPage)
  .get("/services/users", usersService);
