import { Request, Response } from 'express';

class Usercontroller {
    public create(req: Request, res: Response): void {
        res.status(201).send('create user');
    }

    public getAll(req: Request, res: Response): void {
        res.send('Get all users');
    }

    public get(req: Request, res: Response): void {
        res.send(`Get user with id ${req.params.id}`);
    }

    public update(req: Request, res: Response): void {
        res.send(`Update user with id ${req.params.id}`);
    }

    public delete(req: Request, res: Response): void {
        res.send(`Delete user with id ${req.params.id}`);
    }
}

export const userController = new Usercontroller();
