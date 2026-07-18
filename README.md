# Web Development Project 6 - Book Explorer

Submitted by: **Hina Sadiq**

This web app allows users to browse fiction books from the Open Library API, search by title, filter books by publication year, view summary statistics, explore interactive data visualizations, and click on individual books to view detailed information on a dedicated page.

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - [x] Clicking on an item in the dashboard list navigates to a detail view for that item.
  - [x] Detail view includes extra information about the item not included in the dashboard view.
  - [x] The same application layout/navigation is maintained while viewing the detail page.

- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  - [x] Each book has its own unique URL using React Router.
  - [x] Users can directly navigate to a specific book's detail page.

- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - [x] Bar chart showing the number of books by publication era.
  - [x] Pie chart showing the distribution of books across publication eras.

## The following **optional** features are implemented:

- [x] The site's customized dashboard contains additional descriptive content introducing the Book Explorer application and encouraging users to discover books.
- [ ] The site allows users to toggle between different data visualizations.

## The following **additional** features are implemented:

- [x] Search books by title.
- [x] Filter books by publication year.
- [x] Summary statistic cards displaying key dataset information.
- [x] Responsive dashboard layout.
- [x] Modern UI with custom color palette and hover animations.
- [x] Styled book detail page with subject tags and navigation back to the dashboard.
- [x] Interactive charts with customized styling using Recharts.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="YOUR_GIF_LINK_HERE" title="Video Walkthrough" width="800" alt="Video Walkthrough" />

GIF created with Kap (macOS).

## Notes

One of the biggest challenges was integrating React Router into the existing dashboard while maintaining a clean navigation flow between the dashboard and the individual book detail pages. Another challenge was transforming the fetched API data into meaningful visualizations using Recharts and customizing the charts to match the overall design of the application.

## License

    Copyright 2026 Hina Sadiq

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.