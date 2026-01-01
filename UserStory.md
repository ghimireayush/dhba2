# DHBA Website - User Stories

**Project:** District Hotel Business Association Kathmandu Website  
**Date:** December 17, 2025

---

# PUBLIC PAGES

## 1. Homepage (`/`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| HP-01 | As a visitor, I want to see what DHBA is about within seconds of landing, so I don't waste time figuring out the website purpose. | Hero section displays DHBA branding, tagline, and key stats |
| HP-02 | As a visitor, I want to see how many hotels and members DHBA has, so I can gauge the organization's credibility. | Animated counter shows members, hotels, events, years of operation |
| HP-03 | As a visitor, I want to see member hotel locations on a map, so I understand DHBA's geographic coverage. | Interactive Nepal map shows 7 member locations |
| HP-04 | As a visitor, I want to quickly find contact information, so I can reach DHBA without searching. | Contact section displays phone, email, address, social links |
| HP-05 | As a visitor, I want to subscribe to updates, so I stay informed about DHBA news. | Newsletter form accepts email and shows success confirmation |
| HP-06 | As a visitor, I want to see recent news, so I know the organization is active. | News section shows 3-5 latest articles with dates |

---

## 2. About Page (`/about`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| AB-01 | As a potential member, I want to read DHBA's mission and vision, so I can decide if my values align. | Mission and vision statements are clearly displayed |
| AB-02 | As a journalist, I want to see the leadership team with contact details, so I can reach them for interviews. | 16 leaders shown with names, positions, and phone numbers |
| AB-03 | As a visitor, I want to see which associations are part of DHBA, so I understand the network structure. | List of 7 member associations displayed |
| AB-04 | As a hotel owner, I want a clear path to join DHBA, so I can become a member. | "Join DHBA" button links to signup page |

---

## 3. Hotels Page (`/hotels`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| HT-01 | As a traveler, I want to search hotels by name, so I can quickly find a specific hotel. | Search box filters hotels in real-time as I type |
| HT-02 | As a traveler, I want to filter hotels by location, so I find hotels near my destination. | Location filter shows options: Thamel, Kathmandu Center, Bhaktapur, Patan |
| HT-03 | As a traveler, I want to filter by star rating, so I find hotels matching my budget. | Star rating filter (1-5 stars) updates results |
| HT-04 | As a traveler, I want to see hotels on a map, so I can choose by location visually. | Map view toggle shows all hotels with clickable markers |
| HT-05 | As a traveler, I want to see hotel amenities at a glance, so I can compare options quickly. | Hotel cards show WiFi, Pool, Restaurant icons |

---

## 4. Destinations Page (`/destinations`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| DS-01 | As a tourist, I want to browse destinations by category, so I find places matching my interests. | Filter by Temples, Nature, Cultural, Adventure |
| DS-02 | As a tourist, I want to see distance from city center, so I can plan my travel time. | Each destination card shows distance |
| DS-03 | As a tourist, I want to find hotels near a destination, so I can book accommodation nearby. | Destination detail shows "nearby hotels" section |

---

## 5. Events Page (`/events`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| EV-01 | As a professional, I want to see upcoming DHBA events, so I can plan to attend. | Events list shows future events with dates and locations |
| EV-02 | As a member, I want to RSVP to an event, so organizers know I'm attending. | RSVP button registers my attendance (requires login) |
| EV-03 | As a visitor, I want to filter events by category, so I find relevant events. | Filter by Meeting, Workshop, Networking |
| EV-04 | As a visitor, I want to view events in calendar format, so I can see scheduling at a glance. | Calendar view option available |

---

## 6. Gallery Page (`/gallery`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| GL-01 | As a visitor, I want to view event photos, so I can see what DHBA events are like. | Photo grid displays event images |
| GL-02 | As a visitor, I want to click a photo to see it full-screen, so I can view details. | Lightbox opens on photo click |
| GL-03 | As a visitor, I want to watch DHBA videos, so I can learn more about activities. | Video gallery with playable videos |
| GL-04 | As a visitor, I want to filter photos by event, so I find specific event photos. | Filter dropdown by event/album |

---

## 7. Members Page (`/members`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| MB-01 | As a business person, I want to search for member organizations, so I can find potential partners. | Search box filters by organization name |
| MB-02 | As a visitor, I want to see member contact information, so I can reach them directly. | Member cards show phone and email |
| MB-03 | As a visitor, I want to filter members by location, so I find members in my area. | Location filter available |

---

## 8. Resources Page (`/resources`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| RS-01 | As hotel staff, I want to access training materials, so I can improve my skills. | Training documents listed and downloadable |
| RS-02 | As a professional, I want to read industry blog posts, so I stay informed. | Blog section shows articles with titles and dates |
| RS-03 | As a user, I want to search resources by topic, so I find relevant materials quickly. | Search box filters resources |

---

## 9. Careers Page (`/careers`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| CR-01 | As a job seeker, I want to browse job openings, so I can find employment opportunities. | Job listings displayed with titles and companies |
| CR-02 | As a job seeker, I want to filter jobs by type, so I find full-time or part-time positions. | Filter by Full-time, Part-time, Contract |
| CR-03 | As a job seeker, I want to apply for a job online, so I can submit my application easily. | Apply button opens application form |
| CR-04 | As a job seeker, I want to see job requirements, so I know if I qualify. | Job detail page shows requirements and qualifications |

---

## 10. Contact Page (`/contact`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| CT-01 | As a visitor, I want to send a message to DHBA, so I can ask questions or give feedback. | Contact form with name, email, subject, message fields |
| CT-02 | As a visitor, I want to see DHBA's office location on a map, so I can visit in person. | Interactive map shows office location |
| CT-03 | As a visitor, I want to call DHBA directly, so I can speak to someone immediately. | Clickable phone number (tel: link) |
| CT-04 | As a visitor, I want confirmation after submitting the form, so I know my message was received. | Success message displays after submission |

---

# AUTHENTICATION PAGES

## 11. Login Page (`/login`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| LG-01 | As a member, I want to log into my account, so I can access member features. | Login form accepts email and password |
| LG-02 | As a user, I want to see an error message if login fails, so I know what went wrong. | Error message displays for invalid credentials |
| LG-03 | As a user, I want to reset my password from the login page, so I can recover my account. | "Forgot password" link navigates to reset page |
| LG-04 | As a new user, I want to sign up from the login page, so I can create an account. | "Sign up" link navigates to registration |

---

## 12. Sign Up Page (`/signup`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| SU-01 | As a hotel owner, I want to register my organization, so I can become a DHBA member. | Registration form captures organization details |
| SU-02 | As a new user, I want to create login credentials, so I can access my account later. | Form includes username and password fields |
| SU-03 | As a new user, I want to see password requirements, so I create a strong password. | Password strength indicator shown |
| SU-04 | As a new user, I want confirmation after registering, so I know my application was received. | Success message and redirect to login |

---

## 13. Forgot Password Page (`/forgot-password`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| FP-01 | As a user who forgot my password, I want to request a reset link, so I can regain access. | Email input form sends reset link |
| FP-02 | As a user, I want confirmation that the reset email was sent, so I know to check my inbox. | Success message displays after submission |
| FP-03 | As a user, I want to set a new password, so I can log in again. | Reset link opens new password form |

---

# MEMBER PORTAL PAGES

## 14-15. Member Dashboard (`/member-portal/dashboard`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| MD-01 | As a member, I want to view and edit my profile, so my information stays current. | Profile section with edit functionality |
| MD-02 | As a member, I want to post job openings, so I can hire staff for my hotel. | "Create Job" form available |
| MD-03 | As a member, I want to see events I've RSVP'd to, so I can track my schedule. | "My Events" section shows registered events |
| MD-04 | As a member, I want to message other members, so I can network and collaborate. | Messaging inbox and compose functionality |
| MD-05 | As a member, I want to manage my notification settings, so I control what emails I receive. | Settings panel with notification preferences |
| MD-06 | As a member, I want to log out securely, so my account stays protected. | Logout button clears session |

---

# ADMIN PAGES

## 16-17. Admin Dashboard (`/admin/dashboard`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| AD-01 | As an admin, I want to see website statistics at a glance, so I understand site activity. | Stats cards show hotels, members, events, destinations counts |
| AD-02 | As an admin, I want to see recent activity, so I know what's happening on the site. | Activity feed shows last 4 actions with timestamps |
| AD-03 | As an admin, I want to check system status, so I know if anything needs attention. | Status panel shows database, API, backup health |
| AD-04 | As an admin, I want to update site settings, so I can configure the website. | Settings tab with editable fields and save button |

---

## 18. Admin Destination Manager (`/admin/destinations`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| DM-01 | As an admin, I want to add new destinations, so visitors can discover more places. | "Add Destination" form with all fields |
| DM-02 | As an admin, I want to edit destination details, so information stays accurate. | Edit button opens pre-filled form |
| DM-03 | As an admin, I want to delete outdated destinations, so the list stays relevant. | Delete button with confirmation dialog |
| DM-04 | As an admin, I want to upload destination photos, so listings look attractive. | Image upload functionality |

---

## 19. Admin Events Manager (`/admin/events`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| EM-01 | As an admin, I want to create new events, so members know about upcoming activities. | Event creation form with date, time, location |
| EM-02 | As an admin, I want to edit event details, so I can update information as needed. | Edit functionality for existing events |
| EM-03 | As an admin, I want to see who registered for an event, so I can plan accordingly. | Attendee list visible for each event |
| EM-04 | As an admin, I want to cancel an event, so attendees are informed. | Cancel/archive option available |

---

## 20. Admin Hotels Manager (`/admin/hotels`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| HM-01 | As an admin, I want to add member hotels, so they appear in the directory. | Hotel creation form with all details |
| HM-02 | As an admin, I want to edit hotel information, so listings stay accurate. | Edit functionality for hotel details |
| HM-03 | As an admin, I want to remove hotels, so non-members don't appear. | Delete option with confirmation |
| HM-04 | As an admin, I want to mark hotels as featured, so they get more visibility. | Featured toggle option |

---

## 21. Admin Members Manager (`/admin/members`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| MM-01 | As an admin, I want to approve new member applications, so they can access member features. | Approve/reject buttons for pending applications |
| MM-02 | As an admin, I want to edit member information, so records stay accurate. | Edit functionality for member details |
| MM-03 | As an admin, I want to suspend member accounts, so I can handle policy violations. | Suspend/activate toggle |
| MM-04 | As an admin, I want to export member list, so I can use data for reports. | Export button generates downloadable file |

---

## 22. Admin Gallery Manager (`/admin/gallery`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| GM-01 | As an admin, I want to upload photos, so the gallery has fresh content. | Photo upload with drag-and-drop |
| GM-02 | As an admin, I want to organize photos into albums, so visitors can browse easily. | Album creation and assignment |
| GM-03 | As an admin, I want to delete photos, so I can remove inappropriate content. | Delete option for each photo |
| GM-04 | As an admin, I want to upload videos, so visitors can watch DHBA content. | Video upload functionality |

---

# DETAIL PAGES

## 23. Hotel Detail (`/hotels/[id]`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| HD-01 | As a traveler, I want to see full hotel details, so I can make a booking decision. | Complete hotel info displayed |
| HD-02 | As a traveler, I want to view hotel photos, so I can see what to expect. | Photo gallery with multiple images |
| HD-03 | As a traveler, I want to see the hotel location on a map, so I know where it is. | Map showing hotel location |
| HD-04 | As a traveler, I want to contact the hotel directly, so I can make inquiries. | Contact info with clickable phone/email |

---

## 24. Destination Detail (`/destinations/[id]`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| DD-01 | As a tourist, I want to read full destination details, so I can plan my visit. | Complete description and travel info |
| DD-02 | As a tourist, I want to see entry fees and hours, so I know when and how much. | Practical info section |
| DD-03 | As a tourist, I want to find nearby hotels, so I can book accommodation. | "Hotels nearby" section with links |

---

## 25. Event Detail (`/events/[id]`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| ED-01 | As an attendee, I want to see full event details, so I know what to expect. | Complete event description and agenda |
| ED-02 | As an attendee, I want to RSVP to the event, so organizers count me in. | RSVP button that registers attendance |
| ED-03 | As an attendee, I want to see the venue location, so I can find my way. | Map showing event location |

---

## 26. Job Detail (`/careers/[id]`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| JD-01 | As a job seeker, I want to read the full job description, so I understand the role. | Complete job details displayed |
| JD-02 | As a job seeker, I want to see requirements, so I know if I qualify. | Requirements and qualifications listed |
| JD-03 | As a job seeker, I want to apply online, so I can submit my application. | Application form or apply button |

---

## 27. Member Detail (`/members/[id]`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| MBD-01 | As a visitor, I want to see member organization details, so I can learn about them. | Full organization profile displayed |
| MBD-02 | As a visitor, I want to contact the member, so I can reach out for business. | Contact information shown |

---

## 28. Blog Post Detail (`/resources/blog/[id]`)

| ID | User Story | Acceptance Criteria |
|----|------------|---------------------|
| BP-01 | As a reader, I want to read the full article, so I can learn from the content. | Complete article content displayed |
| BP-02 | As a reader, I want to see related articles, so I can continue reading. | Related posts section |
| BP-03 | As a reader, I want to share the article, so I can spread useful information. | Share buttons for social media |

---

# STORY COUNT SUMMARY

| Section | Stories |
|---------|---------|
| Public Pages (10) | 35 |
| Authentication (3) | 10 |
| Member Portal (2) | 6 |
| Admin Pages (6) | 20 |
| Detail Pages (6) | 14 |
| **Total** | **85** |


