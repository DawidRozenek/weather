## App Requirements

1. Create and share a public repository on GitHub, Bitbucket, etc.

2. Push the final source code to the master branch.

3. Create an Angular project using version 15+ and include all plugins that help you in your daily coding.
 - I included angular materials

4. Create an application with lazy loading modules.
 - Profile and Weather are lazy-loaded modules

5. Create a simple communication layer between the application and the lazy loaded module.
 - Communication layer between two lazy-loaded modules is thorugh userPreferencesService that is in /shared folder. It could be done in various ways f.ex store, but this solution is better for small apps 

6. Dynamically register additional routes inside the lazy loading module when it is initialized.
 - Not sure about this point:
  If it should be done in component after lazy-loaded module is initialized than it could be done like this:

   ngOnInit(): void {
    // Dynamically add additional route
    const dynamicRoute: Route = { path: 'dynamic-route', loadChildren: () => import('./dynamic-route.module').then(m => m.DynamicRouteModule) };
    this.router.config.push(dynamicRoute);
   }

   Or maybe it is about dynamic routes such as :id or something? Unclear requirement for me.

   Description could be more detailed, because it's not clear what is expected to be done for me :)

7. Pass some values through the communication layer to the lazy loaded component.
 - Done through userPreferencesService
