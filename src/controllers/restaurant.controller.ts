import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send("Home Page");
        // send | json | redirect | end | render
    } catch (err) {
        console.log("ERROR, goHome:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    } catch (err) {
        console.log("ERROR, getLogin:", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("Signup Page");
    } catch (err) {
        console.log("ERROR, getSignup:", err);
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        res.send("DONE")
    } catch (err) {
        console.log("ERROR, processLogin:", err);
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        res.send("DONE")
    } catch (err) {
        console.log("ERROR, processSingup:", err);
    }
};

export default restaurantController;