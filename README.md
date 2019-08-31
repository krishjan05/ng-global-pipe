# ng-global-pipe
This is an example for creating global pipes in Angular 8 applications

# Procedure:

## Creating Angular application and modules
1. Start by creating a new Angular 8 application at a location of your choice on your disk using the following command:
```
ng new <name of the project>
```
2. Now create 2 module under the app folder using the following command:
```
ng g m <name of the module> --routing
```
3. I have create 2 modules viz user and product along with routing to these module and added them to imports array of app.module.ts.

## Create Component and it's routing
1. Add 2 component one and user and another is product. I have added user-list and product-list component in user and product module respectively.
2. Add a route in each user.module.ts and product.module.ts file for navigating to specific page. I have added /user for navigating to user list component and /product for navigating to product list component
3. In this type of set if you want to transform data on views of both the module with same pipe, then we need to implement a global pipe. 

## Create shared module and pipe
1. Create a folder named shared under app folder and then in that folder create a shared module without routing. We will be using this module to expose our pipe to rest of the application.
2.  Create a folder named pipe under shared folder and create a pipe in that folder using following command
```
ng g p <name of the pipe>
```
3. I will be creating a pipe which will take string and return a uppercase of the same string.
4. Now add the pipe in declaration and export array of shared.module.ts. If by default the pipe gets added to the app.module.ts file remove it from there.
5. Import the shared.module in any other module where you want to use the pipe.
6. Now you can navigate to any of the module and check your pipe.


