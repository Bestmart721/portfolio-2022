# portfolio-2022
A little portfolio app made using a MongoDB/Node/Express/React/Redux stack.

Users can authenticate via OAuth and leave testimonials on the homepage. 
(1 per user at the moment, editing one's previous testimonial is a goal).

Navigation is done via dynamic rendering inside the React router, 
alongside using Redux for storing carousel "pane" state (the previously visited pane, 
the current one, whether the app is moving between panes, etc.).

Planned changes:
  - Add projects tab to show actual portfolio info
  - MongoDB User Schema refactor to include Google name / profile picture to display on testimonials
  - Editing testimonials as previously mentioned
  - Add Github webhook to backend for live commit updates (maybe on the landing page?)
  - Further input sanitization (likely through middleware)
  - Sass refactoring
  - Other refactoring (I am still a beginner with React/Redux, some of my code is I'm sure inefficient or redundant)
 
 Documentation is sparse at the moment. Many features in the app are very new and subject to refactoring.
 In depth documentation will come once the React app's structure has been truly pinned down.
  
 An instance of the app can be found deployed at: https://still-wildwood-50354.herokuapp.com/
