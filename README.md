# TutorialApp 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



### *** ^^^ START ^^^ *** ###
* Poject Details with Workarround Process:  
# ============= ----------- =============
URL: http://www.sahosofttutorials.com/Course/AngularProject/100/

Step 1: Create Project 	>> ng new Angular-with-routing-module-tutorial-app-001
Step 2: Add Bootstrap  	>> npm install bootstrap
							This will also add the bootstrap package to package.json.
							The Bootstrap 4 assets will be installed in the node_modules/bootstrap folder.
Step 3: Add JQuery	   	>> npm install --save jquery
							This is required for the Bootstrap 
							This will also add the JQuery package to package.json.
Step 4: Add Popper	   	>> npm install popper.js --save
							This is required for the Bootstrap 
							This will also add the Popper package to package.json.
							
		Now finally add those to angular.json file :
		[{
		 "styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/popper.js/dist/popper.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
		}]
	
Step 5: Create mentioned all Modules, Components and Services:

	Modules:
		Courses		: ng generate module courses  -- routing [Will not work > Angular 7 , so follow bellow steps to create module and routing separatly with register the created router in our main module as "app.module.ts" ]
			>> ng generate module courses
				Will create Only Module file as :
					* CREATE src/app/courses/courses.module.ts (193 bytes)
			>> ng generate module courses/courses-routing --flat --module=app
				Will create routing module and register in main module like app.module.ts file 
					* CREATE src/app/courses/courses-routing.module.ts (200 bytes)
					* UPDATE src/app/app.module.ts (492 bytes)
					
					Components in Courses Module:
						Course Feature	: ng g c courses/course-featured 
						Course List		: ng g c courses/course-list
						Course Details	: ng g c courses/course-detail
						Course Recent	: ng g c courses/course-recent
						CourseCategories: ng g c courses/course-categories
					Service For Course Module:
						course 	:ng g s courses/courses
					
		Staticpages	: Create this module like above module (Courses)
			ng generate module staticpage
			ng generate module staticpages/staticpages-routing --flat --module=app
				
					Components of Staticpages module:
						Pages 		: ng g c staticpages/page
						Contact Us	: ng g c staticpages/contact-us
					Service For Staticpages Module: 
						Staticpages	: ng g s staticpages/staticpages
						
		Admin		: - DO -
			ng generate module admin
			ng generate module admin/admin-routing --flat --module=app
		Auth		: - do -
			ng generate module auth
			ng generate module auth/auth-routing --flat --module=app
			
	CommonComponents:
		banner			: ng g c banner 
		header			: ng g c header 
		footer			: ng g c footer
		Page-not-found	: ng g c page-not-found
	
Step 6:  app.module.ts >> Import courses and staticpages module in app.module.ts
			As we want them to display during or inital aap load so need to configure in this file
			
Step 7:	 courses/courses.module.ts	>> Export CousresFeaturedComponent for showing this component on root component like app.component.html

Step 8: app.component.html: Now add all the components we want to display in application start:
			<div class="container"/>
				<app-header></app-header>
				<app-banner></app-banner>
				<app-course-featured></app-course-featured>
				<app-footer></app-footer>
				<router-outlet></router-outlet>
			</div>
			
Step 9: styles.css : You can create your own theme in Styles.css file of root directory of project
Step 10: Keep all images in src/assets/images folder
Step 11: Design the header component src/app/header/header.component.html
Step 12: Design the banner component src/app/banner/banner.component.html
Step 13: Design the footer component src/app/footer/footer.component.html
Step 14: Design the Courses featured component >> src/app/courses/courses-featured/courses-featured.component.html
Step 15: Project - Routing >>
			Set banner and featured view on home page : Edit the file src/app/app.component.ts
			import Router and inject router in constructor as public like this constructor(public router: Router) {}
			As we are trying to route more components inside the AppComponent
			
			Edit the file src/app/app.component.html >> To display the other components in the place in appcomponent
			so need to change the <router-outlet> place in the AppComponent to load and display the other routing components
			
			Now add the routing path for all the components in their respected routing file inside the module
			
			Now set the routerLink and routerLinkActive in header component in menu link

Step 16: Edit the file src/app/courses/course-detail/course-detail.component.html
			Also keep two components course-recent and course-categories on this page for showing recent course post and categories.

Step 17: Edit the file src/app/courses/course-categories/course-categories.component.html
Step 18: Edit the file src/app/staticpages/page/page.component.html
Step 19: Theme integration of contact Us page >> Edit the file src/app/staticpages/contact-us/contact-us.component.html
Step 20: Theme integration of 404 page: Edit the component file src/app/page-not-found/page-not-found.component.ts
			Import Rotuer and create a founction gotoHome() to navigate home page
Step 21: Edit the component src/app/page-not-found/page-not-found.component.html >> Call gotoHome() on click button Go to Home

Step 22: Now everything and all components are ready so will start looking into backend called and Regirstions etc.
	Create the component in Auth for registration page >> ng g c auth/registration
	Create Class, Create a class as employee >> ng g class auth/employee
	Create service, Create a class as employeeservice >> ng g class auth/employeeservice
    
	Edit the file src/app/app.module.ts 
	Import EmplyeeserviceService and set it in provider array

	Edit the file src/app/Auth/registration/registration.component.ts
	Import the FormBuilder, Validators, FormGroup from @angular/forms
	Import the EmplyeeserviceService service
	Import the Employee class
	Inject FormBuilder and EmplyeeserviceService in constructor
	Set the Validators for all controls
	Create the method for create employee

Step 23: Create login component 	>> ng g c auth/login
		Create a class as loginemployee >> ng g class auth/login/loginemployee
		change in employeeservice, Edit in the file >> src/app/auth/employeeservice.ts
		
		Than create and use the operational functionalities 
		
Step 24: Create a componnet as dashboard >> ng g c admin/dashboard
			Edit the file src/app/Admin/dashboard/dashboard.component.html
			
Step 25: Now need to add routing details for created Dashboard in >> src/app/Admin/admin-routing.module.ts
		
		
Step 26: set the design of post page >> src/app/Admin/post/post.component.HTML
Step 27: Create a class as post >> ng g class admin/post
Step 28: create service PostService >> ng g service admin/post
Step 29: Edit the file >> src/post/post.component.ts
	
		
		
		http://www.sahosofttutorials.com/Course/AngularProject/108/

### *** ^^^ START ^^^ *** ###



      ng g m courses --routing
		CREATE src/app/courses/courses.module.ts (284 bytes)
      ng generate module staticpages  --routing 
		CREATE src/app/staticpages/staticpages-routing.module.ts (255 bytes)
      ng generate module admin  --routing 
		CREATE src/app/admin/admin-routing.module.ts (249 bytes)
		CREATE src/app/admin/admin.module.ts (276 bytes)
      ng generate module auth  --routing 
		CREATE src/app/auth/auth-routing.module.ts (248 bytes)
      ng generate component banner
		CREATE src/app/banner/banner.component.html (21 bytes)
		CREATE src/app/banner/banner.component.spec.ts (628 bytes)
		CREATE src/app/banner/banner.component.ts (275 bytes)
		CREATE src/app/banner/banner.component.css (0 bytes)
      ng generate component header
		CREATE src/app/header/header.component.html (21 bytes)
		CREATE src/app/header/header.component.spec.ts (628 bytes)
		CREATE src/app/header/header.component.ts (275 bytes)
		CREATE src/app/header/header.component.css (0 bytes)
      ng generate component footer
		CREATE src/app/footer/footer.component.html (21 bytes)
		CREATE src/app/footer/footer.component.spec.ts (628 bytes)
		CREATE src/app/footer/footer.component.ts (275 bytes)
		CREATE src/app/footer/footer.component.css (0 bytes)
      ng generate component page-not-found
		CREATE src/app/page-not-found/page-not-found.component.html (29 bytes)
		CREATE src/app/page-not-found/page-not-found.component.spec.ts (672 bytes)
		CREATE src/app/page-not-found/page-not-found.component.ts (305 bytes)
		CREATE src/app/page-not-found/page-not-found.component.css (0 bytes)
      ng generate component courses/course-featured
		CREATE src/app/courses/course-featured/course-featured.component.html (30 bytes)
		CREATE src/app/courses/course-featured/course-featured.component.spec.ts (685 bytes)
		CREATE src/app/courses/course-featured/course-featured.component.ts (310 bytes)
		CREATE src/app/courses/course-featured/course-featured.component.css (0 bytes)
      ng generate component courses/course-list
		CREATE src/app/courses/course-list/course-list.component.html (26 bytes)
		CREATE src/app/courses/course-list/course-list.component.spec.ts (657 bytes)
		CREATE src/app/courses/course-list/course-list.component.ts (294 bytes)
		CREATE src/app/courses/course-list/course-list.component.css (0 bytes)
      ng generate component courses/course-detail
			CREATE src/app/courses/course-detail/course-detail.component.html (28 bytes)
			CREATE src/app/courses/course-detail/course-detail.component.ts (302 bytes)
			CREATE src/app/courses/course-detail/course-detail.component.css (0 bytes)
			UPDATE src/app/courses/courses.module.ts (594 bytes)
      ng generate component courses/course-recent
			CREATE src/app/courses/course-recent/course-recent.component.html (28 bytes)
			CREATE src/app/courses/course-recent/course-recent.component.ts (302 bytes)
			CREATE src/app/courses/course-recent/course-recent.component.css (0 bytes)
			UPDATE src/app/courses/courses.module.ts (698 bytes)
      ng generate component courses/course-categories
			CREATE src/app/courses/course-categories/course-categories.component.html (32 bytes)
			CREATE src/app/courses/course-categories/course-categories.component.ts (318 bytes)
			CREATE src/app/courses/course-categories/course-categories.component.css (0 bytes)
			UPDATE src/app/courses/courses.module.ts (818 bytes)
      ng generate service courses/courses
		CREATE src/app/courses/courses.service.spec.ts (362 bytes)
		CREATE src/app/courses/courses.service.ts (136 bytes)
      ng generate component staticpages/page
			CREATE src/app/staticpages/page/page.component.html (19 bytes)
			CREATE src/app/staticpages/page/page.component.spec.ts (614 bytes)
			CREATE src/app/staticpages/page/page.component.ts (267 bytes)
			UPDATE src/app/courses/courses.module.ts (818 bytes)
      ng generate service courses/courses
		CREATE src/app/courses/courses.service.spec.ts (362 bytes)
		CREATE src/app/courses/courses.service.ts (136 bytes)
      ng generate component staticpages/page
		CREATE src/app/staticpages/page/page.component.html (19 bytes)
		CREATE src/app/staticpages/page/page.component.spec.ts (614 bytes)
		CREATE src/app/staticpages/page/page.component.ts (267 bytes)
      ng generate service courses/courses
		CREATE src/app/courses/courses.service.spec.ts (362 bytes)
		CREATE src/app/courses/courses.service.ts (136 bytes)
      ng generate component staticpages/page
			CREATE src/app/staticpages/page/page.component.html (19 bytes)
			CREATE src/app/staticpages/page/page.component.spec.ts (614 bytes)
			CREATE src/app/staticpages/page/page.component.ts (267 bytes)
			CREATE src/app/staticpages/page/page.component.css (0 bytes)
			UPDATE src/app/staticpages/staticpages.module.ts (368 bytes)
      ng generate component staticpages/contact-us
			CREATE src/app/staticpages/contact-us/contact-us.component.html (25 bytes)
			CREATE src/app/staticpages/contact-us/contact-us.component.spec.ts (650 bytes)
			CREATE src/app/staticpages/contact-us/contact-us.component.ts (290 bytes)
			CREATE src/app/staticpages/contact-us/contact-us.component.css (0 bytes)
			UPDATE src/app/staticpages/staticpages.module.ts (460 bytes)
      ng generate service staticpages/staticpages
		CREATE src/app/staticpages/staticpages.service.spec.ts (382 bytes)
		CREATE src/app/staticpages/staticpages.service.ts (14
		
		
<<<<<<<<  PUSH the Project to Git Hub  >>>>>>>>>

Create the project in GitHub, without Create and initialize README file
	Go to the project root folder and Right Clik and open: Git Bash here
		<- git init
		<- git remote add origin https://github.com/ajitgiri/Angular-with-routing-module-tutorial-app-001.git
		<- git remote -v :To check the permisions like (fetch/push)
		<- git add . : To add all the files to the index to pushed them to remore repository
		<- git commit -m "This is my initial Push to Repository"
		<- git push origin master 

<<<<<<<<  END   >>>>> >>>		
		
		