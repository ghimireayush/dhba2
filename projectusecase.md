# DHBA Project - Complete Page Use Cases & Intentions

**Date:** December 17, 2025  
**Project:** District Hotel Business Association Kathmandu (DHBA) Website  
**Purpose:** Document the use case, intention, and user flow for every page

---

## 📖 Table of Contents

1. [Public Pages](#public-pages)
2. [Authentication Pages](#authentication-pages)
3. [Member Portal Pages](#member-portal-pages)
4. [Admin Pages](#admin-pages)
5. [Dynamic Route Pages](#dynamic-route-pages)
6. [API Routes](#api-routes)

---

# PUBLIC PAGES

## 1. **Homepage** `/`



### Intention
The homepage is the **entry point** and **brand showcase** for the DHBA website. It should immediately communicate who DHBA is, what services it provides, and encourage users to explore further.

### Target Users
- **Primary:** Hotel owners, business leaders, industry professionals
- **Secondary:** Tourists, government officials, journalists
- **All visitors** - first-time and returning

### Key Features & Sections

#### 1. **Hero Section**
- **Purpose:** Immediate visual impact and brand awareness
- **Components:**
  - Business card ticker with scrolling announcements
  - Auto-rotating carousel with 3 DHBA promotional slides
  - Animated meteors effect for visual interest
  - Interactive Nepal map showing 7 member locations
  - Call-to-action buttons

- **User Intent:** Users land here and immediately understand:
  - What DHBA is
  - How many members it has
  - Key locations it operates in

#### 2. **Statistics Section**
- **Purpose:** Build credibility through numbers
- **Shows:**
  - Total members
  - Hotels represented
  - Events hosted
  - Years of operation
- **Animation:** Animated counter from 0 to target number
- **User Intent:** Users feel confidence in a substantial organization

#### 3. **About Preview**
- **Purpose:** Brief introduction to DHBA mission
- **Shows:** 
  - Short mission statement
  - Key achievements
  - Link to full About page
- **User Intent:** Hook users to learn more

#### 4. **Contact Info Section**
- **Purpose:** Immediate contact accessibility
- **Shows:**
  - Phone numbers
  - Email address
  - Office address
  - Social media links
  - Map location
- **User Intent:** Easy access to contact information without leaving homepage

#### 5. **Featured Section**
- **Purpose:** Highlight key features and navigation
- **Shows:**
  - Featured hotels
  - Recent news
  - Upcoming events
  - Featured members
- **Cards:** Interactive cards linking to detail pages
- **User Intent:** Discover key content without scrolling through menus

#### 6. **Central Committee**
- **Purpose:** Build trust through leadership transparency
- **Shows:**
  - Top 5 leadership members
  - Position titles
  - Contact information
  - Member photos
- **User Intent:** Know who's leading the organization

#### 7. **News Section**
- **Purpose:** Keep content fresh and show activity
- **Shows:**
  - Latest news articles
  - Publication dates
  - Brief descriptions
- **Links:** Each news item links to detailed view
- **User Intent:** Users feel the organization is active and engaged

#### 8. **Newsletter Section**
- **Purpose:** Build email subscriber list for marketing
- **Shows:**
  - Email signup form
  - Benefits list of subscribing
  - Success confirmation
- **User Intent:** Users subscribe to get updates

### User Flow
```
1. User lands on homepage
2. Views hero section (immediate impact)
3. Scrolls through statistics (builds credibility)
4. Reads about preview (learns mission)
5. Sees contact info (knows how to reach)
6. Explores featured content (discovers offerings)
7. Reads news (sees activity)
8. (Optional) Subscribes to newsletter
9. (Next action) Click to explore other pages
```

### Data Requirements
- Hero ticker data (8 promotional items)
- Hero carousel slides (3 items)
- Statistics data (members, hotels, events count)
- Featured items (hotels, news, events)
- Top 5 committee members
- Recent news articles (3-5 items)
- Newsletter subscription list

### Integration Points
- `/api/contact` - Newsletter signup submission
- Mock data from `lib/mock-data.ts`
- Context: Language, Theme

### Performance Considerations
- ⚠️ Hero section has heavy animations (optimize)
- ⚠️ Multiple images loaded (use Next.js Image optimization)
- ⚠️ Maps component (lazy load)
- ✅ Implemented: Scroll progress indicator

---

## 2. **About Page** `/about`



### Intention
Provide detailed information about DHBA's mission, history, organizational structure, and leadership. Build credibility and trust with comprehensive organizational transparency.

### Target Users
- **Primary:** Potential members, journalists, government officials
- **Secondary:** Business partners, tourists wanting background info

### Key Sections

#### 1. **Page Header**
- **Content:**
  - Page title: "About DHBA Kathmandu"
  - Breadcrumb navigation
  - Brief description

#### 2. **Mission & Vision Statement**
- **Purpose:** Define organizational purpose
- **Shows:**
  - Mission statement
  - Vision for the future
  - Core values

#### 3. **History Section**
- **Purpose:** Build organizational credibility
- **Shows:**
  - Founding year (2074 B.S.)
  - Key milestones
  - Growth trajectory
  - Member associations (7 locations)

#### 4. **Leadership Directory**
- **Purpose:** Show organizational transparency
- **Contains:** 16 leadership positions including:
  - President
  - Vice Presidents (8)
  - General Secretary
  - Treasurers
  - Secretaries
- **Data Per Person:**
  - Name
  - Position title
  - Phone number (direct contact)
- **User Intent:** Contact leadership directly, verify credentials

#### 5. **Full Member List**
- **Purpose:** Show community engagement
- **Contains:** 13+ general members
- **Data:** Name and phone number
- **User Intent:** Know extended leadership

#### 6. **Member Associations Section**
- **Purpose:** Show geographic reach
- **Lists:** 7 active hotel business associations:
  - Kalanki Hotel Business Association
  - Sundhara Hotel Business Association
  - Bagbazar Hotel Business Association
  - Koteshwor Hotel Business Association
  - Airport Hotel Business Association
  - Chabahil Hotel Business Association
  - New Bus Park & Balaju Hotel Business Association

#### 7. **Call-to-Action**
- **Action:** Join DHBA membership
- **Link:** `/signup`

### User Flow
```
1. Click "About" in navigation
2. View organization intro
3. Read mission and history
4. Review leadership team
5. Understand member associations
6. (Optional) Click leadership contact buttons
7. (Optional) Sign up to join
```

### Data Requirements
- 16 leadership members with contact info
- 13+ general members with contact info
- Mission, vision, values statements
- Historical milestones
- Member associations information

### Business Logic
- Display leadership in order of hierarchy
- Make phone numbers clickable (tel: links)
- Group members by association

### Integration Points
- Link to `/signup` page
- Language context for translations

---

## 3. **Hotels Page** `/hotels`



### Intention
Showcase hotel members of DHBA with filtering, search, and discovery features. Help users find member hotels based on criteria like location, rating, and type.

### Target Users
- **Primary:** Tourists looking for hotels, travelers
- **Secondary:** Business planners, event organizers
- **Tertiary:** DHBA members browsing competitor offerings

### Key Features

#### 1. **Hotel Search**
- **Input:** Search by hotel name or keyword
- **Real-time:** Updates results as user types
- **Purpose:** Quick hotel lookup

#### 2. **Hotel Filters**
- **Filter Options:**
  - **Location:** Thamel, Kathmandu Center, Bhaktapur, Patan, Other
  - **Star Rating:** 5, 4, 3, 2, 1 stars
  - **Hotel Type:** Hotel, Guesthouse, Resort, Boutique Hotel
- **Clear Filters Button:** Reset all filters
- **Purpose:** Narrow down search results

#### 3. **Hotel Grid Display**
- **View Modes:** Grid and Map view toggle
- **Hotel Card Shows:**
  - Hotel image
  - Hotel name
  - Location
  - Star rating with visual stars
  - Amenities (WiFi, Pool, Restaurant icons)
  - Call-to-action button

#### 4. **Map View**
- **Purpose:** Visual location discovery
- **Shows:** All hotels on interactive Leaflet map
- **Interactive:** Click marker to see hotel info
- **Toggle:** Switch between grid and map view

#### 5. **Hotel Detail Page**
- **Route:** `/hotels/[id]`
- **Shows:**
  - Full hotel information
  - Gallery images
  - Amenities list
  - Room types
  - Pricing
  - Contact information
  - Location on map

### User Flow
```
1. Visit hotels page
2. See grid of featured hotels
3. (Optional) Use search to find specific hotel
4. (Optional) Use filters to narrow options
5. (Optional) Switch to map view
6. Click on hotel card to see details
7. View hotel detail page
8. (Optional) Click contact button to call
```

### Data Requirements
- 40+ mock hotels with:
  - Name, description, image
  - Location, coordinates
  - Star rating (1-5)
  - Hotel type (hotel, guesthouse, resort, boutique)
  - Membership status
  - Amenities list
  - Contact information

### State Management
- `searchTerm` - Current search input
- `location` - Selected location filter
- `starRating` - Selected rating filter
- `hotelType` - Selected type filter
- `viewMode` - Grid or Map view

### Business Logic
- Filter hotels based on all selected criteria
- Highlight featured hotels
- Show active members only
- Combine multiple filters (AND logic)

### Performance Considerations
- Implement pagination for 40+ hotels
- Lazy load hotel images
- Lazy load map component

### Integration Points
- Future: API endpoint to fetch hotel data
- Mock data from `lib/mock-data.ts`
- Map library: Leaflet + react-leaflet

---

## 4. **Destinations Page** `/destinations`


### Intention
Showcase tourist destinations in and around Kathmandu that hotels serve. Help travelers plan trips and discover places to visit.

### Target Users
- **Primary:** Tourists planning visits to Kathmandu
- **Secondary:** Travel agencies booking itineraries
- **Tertiary:** Hotel guests planning activities

### Key Features

#### 1. **Destination Grid**
- **Display:** Grid of destination cards
- **Destination Card Shows:**
  - Destination image
  - Name
  - Brief description
  - Category badge (Temple, Nature, Cultural, etc.)
  - Distance from city center
  - Difficulty level (if applicable)

#### 2. **Destination Filtering**
- **Filter By:**
  - Category (Temples, Nature, Cultural, Adventure)
  - Distance from city center
  - Popularity rating
  - Entry fee range

#### 3. **Destination Detail**
- **Route:** `/destinations/[id]`
- **Shows:**
  - Full destination description
  - Gallery of photos and videos
  - Location coordinates on map
  - Travel guide information
  - Nearby hotels
  - Related destinations

#### 4. **Integration with Hotels**
- **Link:** "Find hotels near this destination"
- **Suggest:** Hotels closest to this destination
- **Business Value:** Drive hotel bookings

### User Flow
```
1. Visit destinations page
2. Browse destination grid
3. Click on destination of interest
4. View detailed information
5. See nearby hotels
6. Click to view hotel details
7. (Optional) Book hotel
```

### Data Requirements
- 20+ tourist destinations with:
  - Name, description, images
  - Geographic coordinates
  - Category, difficulty, distance
  - Opening hours, entry fees
  - Travel guide information

### Integration Points
- Link to `/hotels?location=nearby`
- Map library for location display
- Media (images, videos) storage

---

## 5. **Events Page** `/events`



### Intention
Promote DHBA events and industry events. Allow users to discover, learn about, and RSVP to events. Build community engagement and participation.

### Target Users
- **Primary:** DHBA members, hotel staff
- **Secondary:** Industry professionals, students
- **Tertiary:** General public interested in hospitality

### Key Features

#### 1. **Events Grid**
- **Display:** Upcoming and past events
- **Event Card Shows:**
  - Event image/banner
  - Event title
  - Date and time
  - Location
  - Number of attendees
  - Event category (Meeting, Workshop, Networking, etc.)
  - RSVP button

#### 2. **Event Filtering**
- **Filter By:**
  - Date range
  - Category
  - Location
  - Status (Upcoming, Ended, Cancelled)

#### 3. **Event Calendar**
- **View:** Calendar showing all events
- **Purpose:** Easy event discovery by date

#### 4. **Event Detail Page**
- **Route:** `/events/[id]`
- **Shows:**
  - Full event details
  - Description and agenda
  - Speaker/organizer information
  - Location on map
  - Attendance count
  - RSVP functionality
  - Event links/registration

#### 5. **RSVP System**
- **Member Feature:** Members can RSVP to events
- **Requires:** Member authentication
- **Actions:** Confirm attendance, cancel RSVP
- **Notification:** Email confirmation

### User Flow
```
1. Visit events page
2. Browse upcoming events
3. (Optional) Filter by category/date
4. Click event of interest
5. View event details
6. (Optional) RSVP to attend
7. Receive confirmation
```

### Data Requirements
- Event listings with:
  - Title, description, images
  - Date, time, duration
  - Location, coordinates
  - Organizer information
  - Speaker/presenter info
  - Capacity and registration count
  - Category, status

### State Management
- Currently filtering state
- RSVP status for logged-in members
- Event view mode (list, calendar, grid)

### Integration Points
- Member authentication (for RSVP)
- Email service (for confirmations)
- Calendar library
- Future: Event management API

---

## 6. **Gallery Page** `/gallery`



### Intention
Showcase visual content (photos and videos) of DHBA events, member hotels, and activities. Build engagement through visual storytelling.

### Target Users
- **Primary:** Event attendees wanting to relive events
- **Secondary:** Journalists, media looking for content
- **Tertiary:** Tourists browsing Kathmandu hotels

### Key Features

#### 1. **Photo Gallery** `/gallery/photos`
- **Grid Display:** Photos from DHBA events and member hotels
- **Features:**
  - Thumbnail grid
  - Lightbox/modal view
  - Full-screen option
  - Image metadata (date, event, photographer)
  - Download option (if allowed)

#### 2. **Video Gallery** `/gallery/videos`
- **Display:** Video collection of DHBA events, promotions, tutorials
- **Features:**
  - Video thumbnail grid
  - Video player modal
  - Duration display
  - View count
  - Related videos

#### 3. **Photo Filtering**
- **Filter By:**
  - Event
  - Month/year
  - Category (Event, Hotel, Member, Destination)
  - Album

#### 4. **Gallery Dropdown Navigation**
-

### User Flow
```
1. Click "Gallery" in navigation
2. Choose Photos or Videos
3. Browse gallery grid
4. Click photo/video to enlarge
5. (Optional) Download or share
6. (Optional) View related media
```

### Data Requirements
- 100+ photos with:
  - Image URL, thumbnail
  - Event/album association
  - Date, photographer credit
  - Description
  
- 20+ videos with:
  - Video URL, thumbnail
  - Duration, upload date
  - View count
  - Description

### Integration Points
- File storage (AWS S3, Cloudinary)
- Media upload (admin only)
- Lightbox library (react-medium-image-zoom or similar)

---

## 7. **Members Page** `/members`




### Intention
Display member directory of DHBA member organizations. Allow searching and filtering by member type. Build community visibility and networking.

### Target Users
- **Primary:** DHBA members
- **Secondary:** Potential members learning about member base
- **Tertiary:** Business partners

### Key Features

#### 1. **Members Grid**
- **Display:** All member organizations with staff
- **Member Card Shows:**
  - Organization name
  - Logo
  - Industry/type badge
  - Member since date
  - Location
  - Contact person
  - Contact method (phone, email)

#### 2. **Member Search**
- **Search By:**
  - Organization name
  - Contact person name
  - Location

#### 3. **Member Detail Page**
- **Route:** `/members/[id]`
- **Shows:**
  - Full organization profile
  - Leadership team
  - Contact information
  - Website link
  - Social media
  - Membership status
  - Member since date

#### 4. **Member Filtering**
- **Filter By:**
  - Location/Association
  - Member status (Active, Pending, Inactive)
  - Organization type
  - Member duration

### User Flow
```
1. Visit members page
2. Search for specific organization
3. (Optional) Filter by location
4. Click on organization
5. View detailed profile
6. Contact organization
```

### Data Requirements
- Member organizations with:
  - Name, logo, description
  - Location, coordinates
  - Contact info (phone, email, website)
  - Leadership list
  - Membership status
  - Member since date

### Integration Points
- Bilingual member names (EN/NE)
- Future: Member profile API

---

## 8. **Resources Page** `/resources`


### Intention
Provide training materials, guides, best practices, and educational content for members. Support member development and industry knowledge sharing.

### Target Users
- **Primary:** DHBA members seeking training
- **Secondary:** Hotel staff wanting to upskill
- **Tertiary:** Industry professionals

### Key Features

#### 1. **Resources Directory**
- **Resource Types:**
  - Training materials
  - Industry guides
  - Best practices documents
  - Webinar recordings
  - Tools and templates

#### 2. **Blog Section** `/resources/blog`
- **Display:** Articles on hospitality industry topics
- **Blog Post Shows:**
  - Title, featured image
  - Author, publication date
  - Category tags
  - Read time estimate
  - Brief excerpt

#### 3. **Blog Detail Page**
- **Route:** `/resources/blog/[id]`
- **Shows:**
  - Full article content
  - Author bio
  - Publication date
  - Related articles
  - Share buttons

#### 4. **Resource Search**
- **Search By:** Title, keywords, category

#### 5. **Resource Filtering**
- **Filter By:**
  - Category
  - Content type
  - Difficulty level
  - Publication date

### User Flow
```
1. Visit resources page
2. Browse resource categories
3. Search for specific topic
4. (Optional) Filter by category
5. Click resource to view
6. (Optional) Download/save
7. (Optional) Share resource
```

### Data Requirements
- 20+ resources with:
  - Title, description, category
  - File URL (PDF, document)
  - Publication date
  - Author information
  
- 10+ blog posts with:
  - Title, content, featured image
  - Author, publication date
  - Category tags
  - Meta description

### Integration Points
- File storage for downloadable resources
- Rich text editor for blog content
- Search/filter functionality
- Related posts recommendation

---

## 9. **Careers Page** `/careers`



### Intention
Showcase job openings posted by member hotels and organizations. Connect job seekers with employment opportunities. Support member HR functions.

### Target Users
- **Primary:** Job seekers, hospitality professionals
- **Secondary:** Career changers interested in hospitality
- **Tertiary:** Students exploring hospitality careers

### Key Features

#### 1. **Job Listings Grid**
- **Display:** Available job positions
- **Job Card Shows:**
  - Job title
  - Hiring organization
  - Location
  - Job type (Full-time, Part-time, Contract)
  - Salary range (if available)
  - Date posted
  - Quick apply button

#### 2. **Job Search**
- **Search By:** Job title, keyword, organization

#### 3. **Job Filtering**
- **Filter By:**
  - Job title/category
  - Location
  - Job type
  - Experience level
  - Salary range

#### 4. **Job Detail Page**
- **Route:** `/careers/[id]`
- **Shows:**
  - Full job description
  - Requirements and qualifications
  - Responsibilities
  - Salary and benefits
  - Application deadline
  - Company information
  - Application form or link

#### 5. **Job Application**
- **Process:**
  - Fill application form
  - Upload resume
  - Optional: Cover letter
  - Submit application
  - Confirmation email

### User Flow
```
1. Visit careers page
2. Browse job listings
3. Search or filter jobs
4. Click job of interest
5. Read full job description
6. Click apply button
7. Fill and submit application
8. Receive confirmation
```

### Data Requirements
- 15+ job postings with:
  - Title, description
  - Organization, location
  - Job type, salary range
  - Requirements, qualifications
  - Application deadline
  - Contact email

### Integration Points
- Job posting API
- Email service (confirmations, notifications)
- Resume storage
- Application tracking system (future)

---

## 10. **Contact Page** `/contact`



### Intention
Provide multiple contact methods and channels for users to reach DHBA. Collect inquiries through contact form. Build trust through transparency and accessibility.

### Target Users
- **All visitors** - anyone wanting to contact DHBA
- **Primary:** Potential members, inquiries
- **Secondary:** Media, partners, vendors

### Key Features

#### 1. **Contact Information Section**
- **Shows:**
  - Office address
  - Phone numbers (multiple)
  - Email address
  - Office hours
  - Location on map
  - Social media links

#### 2. **Contact Form**
- **Form Fields:**
  - Name (required)
  - Organization (optional)
  - Email (required)
  - Subject (required)
  - Message (required)
- **Validation:** Email format, required fields
- **Submission:**
  - Success message display
  - Email confirmation sent
  - Data stored in database

#### 3. **Interactive Map**
- **Purpose:** Show office location
- **Features:**
  - Leaflet map
  - Draggable markers
  - Zoom controls
  - Map directions link

#### 4. **Multiple Contact Methods**
- **Options:**
  - Email form
  - Phone call (tel: link)
  - WhatsApp (link)
  - Social media

### User Flow
```
1. Visit contact page
2. See contact information
3. Review office location on map
4. (Option A) Call using phone link
5. (Option B) Fill and submit contact form
6. (Option C) Use social media links
7. Receive confirmation
```

### Data Requirements
- Contact information:
  - Office address, coordinates
  - Phone numbers
  - Email addresses
  - Office hours
  - Social media handles

### State Management
- Form data (name, email, organization, subject, message)
- Form submission status
- Success/error messages

### Form Validation
- Email format validation
- Required fields check
- Message length check

### Integration Points
- `/api/contact` - Form submission endpoint
- Email service (SendGrid, AWS SES)
- Map library (Leaflet)
- Honeypot field (spam prevention)

### Business Logic
- Validate form before submission
- Store contact in database
- Send notification email to admin
- Send confirmation email to user
- Clear form after successful submission

---

# AUTHENTICATION PAGES

## 11. **Login Page** `/login`



### Intention
Authenticate users (both admin and members) to access protected features. Gate admin dashboard and member portal.

### Target Users
- **Primary:** DHBA administrators
- **Secondary:** Registered member users

### Demo Credentials (Remove in Production)
```
Admin Login:
  Email: admin@dhba.com
  Password: admin123

Member Login:
  Email: member@hotel.com
  Password: member123
```

### Key Features

#### 1. **Login Form**
- **Fields:**
  - Email address
  - Password
- **Remember me:** Optional checkbox
- **Validation:**
  - Email format check
  - Password required
  - Real-time feedback

#### 2. **User Type Selection**
- **Options:** Admin or Member login
- **Routes:**
  - Admin → `/admin/dashboard`
  - Member → `/member-portal/dashboard`

#### 3. **Authentication Flow**
- Validate credentials
- Generate JWT token
- Store in secure cookie
- Redirect to dashboard
- 3-second auto-redirect

#### 4. **Error Handling**
- Invalid credentials message
- Account locked message (future)
- Server error message

#### 5. **Links**
- Forgot password → `/forgot-password`
- Sign up → `/signup`

### User Flow
```
1. User visits login page
2. Selects user type (Admin/Member)
3. Enters email and password
4. Clicks login button
5. (Success) Redirected to dashboard
6. (Failure) Error message displayed
```

### State Management
- Email input value
- Password input value
- Loading state
- Error message
- Auto-redirect countdown

### Integration Points
- `/api/auth/login` endpoint (to be built)
- JWT token generation
- Session management
- Password validation (backend)

### Security Considerations
- ⚠️ Currently demo with hardcoded credentials
- ✅ Need: Bcrypt password hashing
- ✅ Need: JWT token expiration
- ✅ Need: Secure HTTP-only cookies
- ✅ Need: CSRF protection
- ✅ Need: Rate limiting
- ✅ Need: Account lockout after failed attempts

---

## 12. **Sign Up Page** `/signup`



### Intention
Allow new organizations to register and become DHBA members. Capture business information. Create new user accounts.

### Target Users
- **Primary:** Hotel owners and business leaders
- **Secondary:** Hotel staff with authorization

### Key Features

#### 1. **Registration Form**
- **Organization Information:**
  - Organization name
  - Organization type (Hotel, Guesthouse, Resort, etc.)
  - Registration number
  - Address
  - Location/District
  - Postal code

#### 2. **Contact Information**
- **Primary Contact:**
  - Full name
  - Position/title
  - Email address
  - Phone number

#### 3. **Credentials**
- **Account Setup:**
  - Create username
  - Create password (with strength indicator)
  - Confirm password
  - Terms of service checkbox
  - Privacy policy checkbox

#### 4. **Form Validation**
- Required fields
- Email format
- Password strength (minimum 8 chars, uppercase, number, symbol)
- Password match
- Terms acceptance required

#### 5. **Multi-step Form** (Optional)
- **Step 1:** Organization info
- **Step 2:** Contact info
- **Step 3:** Account credentials
- **Step 4:** Review and submit

#### 6. **Success Flow**
- Confirmation message
- Email verification link sent
- Redirect to login after delay
- Manual verification by admin (future)

### User Flow
```
1. Click "Sign Up" or "Register"
2. Fill organization information
3. Enter contact details
4. Create account credentials
5. Review information
6. Accept terms and submit
7. Receive confirmation email
8. Verify email (future)
9. Admin approval (future)
10. Account activated
```

### Data Requirements
- Capture and store:
  - Organization name, type, registration number
  - Address, location, postal code
  - Contact person name, position
  - Email, phone
  - Username, password hash
  - Registration date
  - Status (pending, approved, rejected)

### Integration Points
- `/api/auth/signup` endpoint (to be built)
- Email verification (future)
- Admin approval workflow (future)
- Payment/subscription setup (future)

### State Management
- Form data (all fields)
- Current step (if multi-step)
- Loading state
- Error messages
- Success state

---

## 13. **Forgot Password Page** `/forgot-password`


### Intention
Allow users who forgot their password to reset it securely. Maintain account accessibility while protecting security.

### Target Users
- **All registered users** - members and admins

### Key Features

#### 1. **Email Request Form**
- **Input:** Email address associated with account
- **Validation:** Email format check
- **Process:**
  - User enters email
  - System finds account
  - Generates reset token
  - Sends email with reset link

#### 2. **Password Reset Email**
- **Contains:**
  - Reset link with token (valid for 24 hours)
  - Instructions
  - Security notice

#### 3. **Password Reset Form** (On reset link click)
- **Fields:**
  - New password
  - Confirm password
- **Validation:**
  - Password strength check
  - Passwords match
  - Not same as previous password

#### 4. **Reset Confirmation**
- **Shows:** Success message
- **Auto-redirect:** To login after 3 seconds
- **Manual:** "Back to login" link

#### 5. **Security Features**
- Reset token expires after 24 hours
- One-time use token
- Email verification
- Success email confirmation

### User Flow
```
1. Click "Forgot Password" on login
2. Enter email address
3. Submit form
4. Receive confirmation message
5. Check email for reset link
6. Click reset link
7. Enter new password
8. Confirm password
9. Reset successful
10. Redirect to login
11. Login with new password
```

### Data Requirements
- Store reset tokens with:
  - User ID
  - Token (hashed)
  - Expiration time
  - Used status

### Integration Points
- `/api/auth/forgot-password` endpoint
- `/api/auth/reset-password` endpoint
- Email service (SendGrid)
- Token generation and validation

### Security Considerations
- ✅ Token must be unique and secure
- ✅ Token must expire (24 hours)
- ✅ Token one-time use only
- ✅ Rate limiting on requests
- ✅ Email validation
- ✅ No account enumeration (show same message for existing/non-existing emails)

---

# MEMBER PORTAL PAGES

## 14. **Member Portal Entry** `/member-portal`



### Intention
Redirect authenticated members to their dashboard. Provide entry point to member-only features.

### Target Users
- **Authenticated members only** - redirects to `/member-portal/dashboard`

### Key Features
- Quick redirect to dashboard
- Placeholder for future welcome screen

### User Flow
```
1. Member clicks "Member Portal" in navigation
2. (Not authenticated) Redirect to `/login`
3. (Authenticated) Redirect to `/member-portal/dashboard`
```

### Integration Points
- Authentication check middleware
- Session verification

---

## 15. **Member Dashboard** `/member-portal/dashboard`

### Intention
Provide members with personalized dashboard showing their profile, jobs, events, resources, and network. Central hub for member activities.

### Target Users
- **Authenticated DHBA member users only**

### Key Features

#### 1. **Dashboard Overview**
- **Shows:**
  - Member greeting with name
  - Quick stats (profile completeness, upcoming events, messages)
  - Quick action buttons

#### 2. **Profile Management Section**
- **View/Edit:**
  - Profile photo
  - Organization name
  - Contact information
  - Bio/description
  - Achievements/credentials
- **Actions:**
  - Upload profile photo
  - Edit all fields
  - Save changes
  - Change password

#### 3. **My Jobs Section**
- **Features:**
  - List my posted job openings
  - View applications received
  - Create new job post
  - Edit active job posts
  - Close/archive job posts
  - Applicant management

#### 4. **My Events Section**
- **Shows:**
  - RSVP'd events
  - Attended events history
  - Upcoming registered events
  - Past attended events
  - Add to calendar option

#### 5. **Resources Section**
- **Access:**
  - View accessed resources
  - Track downloads
  - Bookmark resources
  - View training progress

#### 6. **Network Section**
- **Member Network:**
  - View connection requests
  - Send connection requests
  - Browse member directory
  - View connected members
  - Member profiles

#### 7. **Messages Section**
- **Messaging:**
  - Inbox (received messages)
  - Sent folder
  - Compose new message
  - Message history
  - Mark as read/unread
  - Delete messages

#### 8. **Notifications**
- **Shows:**
  - New messages
  - Event reminders
  - Connection requests
  - System notifications

#### 9. **Settings Panel**
- **Configurable:**
  - Email notification preferences
  - Privacy settings
  - Account security
  - Language preference
  - Display preferences (theme)

#### 10. **Logout**
- **Button:** Sign out of account

### User Flow
```
1. Member logs in
2. Redirected to dashboard
3. View profile summary
4. (Optional) Edit profile
5. (Optional) Post new job
6. (Optional) RSVP to event
7. (Optional) Send message
8. (Optional) Browse network
9. (Optional) Access resources
10. (Optional) Adjust settings
```

### Data Requirements
- Member profile with:
  - Name, email, phone
  - Organization details
  - Bio, photo, credentials
  - Member since date
  
- Job posts with:
  - Title, description
  - Posted date, deadline
  - Applications received
  
- Event RSVPs with:
  - Event ID, RSVP status
  - Attendance confirmation
  
- Network connections with:
  - Connection ID, status
  - Connection date
  
- Messages with:
  - Sender, recipient
  - Content, timestamp
  - Read status

### State Management
- Current tab/section
- Form data (profile edit)
- Modal states (message compose, job create)
- Loading states
- Success/error messages

### Integration Points
- `/api/member/profile` - Get/update profile
- `/api/member/jobs` - CRUD job posts
- `/api/member/events` - Get event RSVPs
- `/api/member/messages` - CRUD messages
- `/api/member/network` - Get connections
- `/api/member/resources` - Get accessed resources

### Security Considerations
- ✅ Requires authentication
- ✅ User can only see own data
- ✅ Rate limiting on API calls

---

# ADMIN PAGES

## 16. **Admin Home** `/admin`



### Intention
Redirect authenticated admins to main dashboard. Entry point for admin functions.

### Target Users
- **Authenticated admin users only** - redirect to `/admin/dashboard`

### Key Features
- Quick redirect to main dashboard
- Authentication gate

### User Flow
```
1. Admin clicks "Admin" in navigation
2. (Not authenticated) Redirect to `/login`
3. (Authenticated) Redirect to `/admin/dashboard`
```

---

## 17. **Admin Dashboard** `/admin/dashboard`



### Intention
Provide admin with overview of system status, recent activity, and quick access to all management functions. Central command center for DHBA administrators.

### Target Users
- **Authenticated DHBA administrators only**

### Key Features

#### 1. **Dashboard Navigation Tabs**
- **Tabs:**
  - Dashboard (overview)
  - Content Management
  - Members
  - Settings

#### 2. **Dashboard Tab**

##### A. **Statistics Grid**
- **Shows (4 cards):**
  - Total Hotels
  - Destinations
  - News & Events
  - Members
- **Each Card Shows:**
  - Current number
  - Trend ("+12 this month")
  - Icon visualization

##### B. **Recent Activity Feed**
- **Shows:**
  - Last 4 activities
  - Activity type
  - Time ago
  - Activity badge (info, update, event, upload)

##### C. **System Status Panel**
- **Displays:**
  - Database status
  - API server status
  - Backup status
  - All green when online
- **Link:** "View Full Reports"

#### 3. **Content Management Tab**
- **6 Management Sections:**
  1. **Manage Hotels**
     - Add, edit, delete hotel listings
  
  2. **Manage Destinations**
     - Create and update destination pages
  
  3. **Manage Events & News**
     - Publish and manage content
  
  4. **Manage Members**
     - Approve applications, manage member data
  
  5. **Manage Gallery**
     - Upload and organize media
  
  6. **View Reports**
     - Analytics and statistics

- **Each Section:**
  - Icon and title
  - Description
  - Link to management page

#### 4. **Members Tab**
- **Members Table:**
  - Hotel Name
  - Contact Email
  - Status (Active/Pending)
  - Edit action button
  
- **Shows:**
  - 3 sample members
  - Sortable/filterable (future)
  - Pagination (future)

#### 5. **Settings Tab**

##### A. **Site Settings**
- **Editable Fields:**
  - Site Name
  - Contact Email
  - Site URL
  - Timezone
  
- **Save Button:** Update settings

##### B. **System Information**
- **Displays:**
  - System Version (1.0.0)
  - Last Updated (current date)
  - Database Status
  - Backup Status
  
- **Actions:**
  - "View Full Reports" link
  - "Reset Database" button (destructive)

#### 6. **Header with Logout**
- **Shows:** Page title, subtitle
- **Button:** Logout (clears auth token)

### User Flow
```
1. Admin logs in
2. Redirected to admin dashboard
3. View overview (stats, activity, status)
4. (Optional) Click "View Full Reports"
5. (Optional) Navigate to Content Management
6. (Optional) Manage specific resource
7. (Optional) Navigate to Members tab
8. (Optional) Edit member info
9. (Optional) Navigate to Settings
10. (Optional) Update configuration
11. (Optional) Logout
```

### State Management
- `activeTab` - Current dashboard tab (dashboard, content, members, settings)
- Form data (settings edit)
- Loading states
- Success/error messages

### Data Requirements
- Dashboard stats:
  - Total hotels count
  - Destinations count
  - News & events count
  - Members count
  - Trend information
  
- Activity log:
  - Action description
  - Time ago
  - Activity type
  
- System status:
  - Component statuses
  - Last check time
  
- Members table:
  - Hotel name
  - Contact email
  - Status
  - Edit URL

### Integration Points
- `/api/admin/stats/*` - Get statistics
- `/api/admin/activity-log` - Get recent activity
- `/api/admin/settings` - Get/update settings
- `/api/admin/members` - Get members list

### Future Enhancements
- Real-time stats updates
- Activity graph visualization
- Advanced filters on members table
- More detailed reports
- Export data functionality

---

## 18. **Admin Destination Manager** `/admin/destinations`



### Intention
Allow admins to create, edit, and manage tourist destination listings. Maintain destination database and content.

### Target Users
- **Authenticated admin users only**

### Key Features

#### 1. **Destinations List**
- **Table/Grid showing:**
  - Destination name
  - Category
  - Location
  - Last updated date
  - Status (published/draft)
  - Actions (edit, delete, preview)

#### 2. **Create New Destination**
- **Button:** "Add Destination"
- **Form Fields:**
  - Name
  - Description (rich text)
  - Category (select)
  - Location/coordinates
  - Featured image upload
  - Gallery images upload
  - Meta description (SEO)
  - Slug/URL

#### 3. **Edit Destination**
- **Edit existing:** Click "Edit" button
- **Update:** Same fields as create
- **Save/Cancel options**

#### 4. **Delete Destination**
- **Confirmation:** Warn before delete
- **Option:** Soft delete (archive) vs hard delete

#### 5. **Bulk Actions**
- **Select:** Multiple destinations
- **Actions:**
  - Delete selected
  - Publish selected
  - Archive selected
  - Export selected

#### 6. **Search & Filter**
- **Search By:** Destination name
- **Filter By:**
  - Category
  - Status (published, draft, archived)
  - Date range

#### 7. **Sorting**
- **Sort By:** Name, date updated, category

### User Flow
```
1. Admin navigates to Destinations
2. View all destinations in list
3. (Optional) Search or filter
4. (Optional) Click "Add Destination"
5. Fill destination form
6. Upload images
7. Save destination
8. Destination listed
9. (Optional) Edit existing
10. (Optional) Delete (confirm)
```

### Data Requirements
- Destinations with:
  - Name, description, category
  - Location, coordinates
  - Featured image, gallery
  - Slug, meta description
  - Created/updated dates
  - Status (published/draft/archived)
  - View count

### Integration Points
- `/api/admin/destinations` - CRUD operations
- Image upload service
- Rich text editor component

---

## 19. **Admin Events Manager** `/admin/events`

### Similar to Destinations Manager

### Key Entities
- Event title, description
- Date, time, duration
- Location
- Organizer
- Speakers/presenters
- Capacity, registration count
- Status, featured flag

### CRUD Operations
- Create new event
- Edit existing
- Delete event
- Publish/unpublish
- View registrations
- Send notifications

---

## 20. **Admin Hotels Manager** `/admin/hotels`

### Similar to Destinations Manager

### Key Entities
- Hotel name, type
- Location, coordinates
- Contact info
- Amenities list
- Room count
- Rating
- Featured flag
- Member status

### CRUD Operations
- Add new hotel
- Edit hotel details
- Remove hotel
- Manage amenities
- View bookings/interest

---

## 21. **Admin Members Manager** `/admin/members`

### Similar to above

### Key Entities
- Organization name
- Contact person
- Email, phone
- Location
- Registration date
- Status (active, pending, inactive)
- Membership details

### Actions
- Approve/reject applications
- Suspend/activate accounts
- Export member list
- Send bulk notifications

---

## 22. **Admin Gallery Manager** `/admin/events`

### Key Features
- Upload photos
- Upload videos
- Organize by album/event
- Manage metadata
- Delete media
- Bulk operations

---

# DYNAMIC ROUTE PAGES

## 23. **Hotel Detail** `/hotels/[id]`

### Purpose
Show complete details of a specific hotel member. Drive bookings and inquiries.

### Displays
- Full hotel information
- Gallery of images
- Room types and pricing
- Amenities list
- Map location
- Contact information
- Related hotels
- Guest reviews (future)
- Booking form (future)

---

## 24. **Destination Detail** `/destinations/[id]`

### Purpose
Detailed information about specific destination to inspire visitors.

### Displays
- Full destination description
- Photo gallery
- Location on map
- Travel guide information
- Opening hours, fees
- Related destinations
- Nearby hotels
- Visitor tips

---

## 25. **Event Detail** `/events/[id]`

### Purpose
Show comprehensive event information. Drive RSVP and attendance.

### Displays
- Event full details
- Description and agenda
- Date, time, location
- Speakers/organizers
- Attendance count
- RSVP button
- Event updates
- Related events

---

## 26. **Job Detail** `/careers/[id]`

### Purpose
Show complete job posting. Drive applications.

### Displays
- Job description
- Requirements and qualifications
- Salary and benefits
- Company information
- Application deadline
- Application form
- Related jobs

---

## 27. **Member Detail** `/members/[id]`

### Purpose
Show member organization profile. Drive engagement and partnerships.

### Displays
- Organization details
- Leadership team
- Contact information
- Location
- Website, social media
- Membership history
- Member since date
- Services offered

---

## 28. **Blog Post Detail** `/resources/blog/[id]`

### Purpose
Display full article content. Drive engagement and knowledge sharing.

### Displays
- Full article content
- Author information
- Publication date, updated date
- Featured image
- Category tags
- Share buttons
- Related articles
- Comments (future)

---

# API ROUTES

## 29. **Contact Form Submission** `/api/contact`

### Method: `POST`

### Purpose
Accept contact form submissions and store/send notifications.

### Request Body
```json
{
  "name": "string",
  "organization": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

### Response
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

### Processing
1. Validate input
2. Check honeypot field (spam prevention)
3. Send confirmation email to user
4. Send notification email to admin
5. Store in database
6. Return success

### Future Enhancements
- Email template customization
- Auto-response templates
- Lead scoring
- CRM integration

---

## 30. **Authentication Routes** `/api/auth/*`

### Endpoints (To be implemented)
- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - New registration
- `POST /api/auth/logout` - Sign out
- `GET /api/auth/me` - Get current user
- `POST /api/auth/forgot-password` - Request reset
- `POST /api/auth/reset-password` - Reset with token
- `POST /api/auth/refresh-token` - Refresh JWT

### Future Endpoints
- `POST /api/auth/verify-email` - Email verification
- `POST /api/auth/2fa/setup` - Two-factor auth
- `POST /api/auth/2fa/verify` - 2FA verification

---

## 31. **Admin API Routes** `/api/admin/*`

### Stats Endpoints
- `GET /api/admin/stats/members` - Member count
- `GET /api/admin/stats/hotels` - Hotel count
- `GET /api/admin/stats/events` - Event count
- `GET /api/admin/stats/destinations` - Destination count

### Management Endpoints
- CRUD endpoints for each resource type
- `/api/admin/members` - Member management
- `/api/admin/hotels` - Hotel management
- `/api/admin/events` - Event management
- `/api/admin/destinations` - Destination management
- `/api/admin/gallery/*` - Gallery management
- `/api/admin/content/blogs` - Blog management

### Utility Endpoints
- `GET /api/admin/activity-log` - Recent activity
- `GET /api/admin/settings` - Get settings
- `PUT /api/admin/settings` - Update settings

---

## 32. **Member API Routes** `/api/member/*`

### Profile Endpoints
- `GET /api/member/profile` - Get my profile
- `PUT /api/member/profile` - Update profile
- `POST /api/member/profile/avatar` - Upload avatar

### Job Endpoints
- `GET /api/member/jobs` - Get my job posts
- `POST /api/member/jobs` - Create job
- `PUT /api/member/jobs/:id` - Edit job
- `DELETE /api/member/jobs/:id` - Delete job
- `GET /api/member/jobs/:id/applicants` - View applicants

### Event Endpoints
- `GET /api/member/events` - Get my events
- `POST /api/member/events/:id/rsvp` - RSVP to event
- `DELETE /api/member/events/:id/rsvp` - Cancel RSVP

### Message Endpoints
- `GET /api/member/messages` - Get messages
- `POST /api/member/messages` - Send message
- `PUT /api/member/messages/:id/read` - Mark as read
- `DELETE /api/member/messages/:id` - Delete message

### Network Endpoints
- `GET /api/member/network/connections` - Get connections
- `POST /api/member/network/connect/:id` - Send request
- `DELETE /api/member/network/disconnect/:id` - Remove connection
- `PUT /api/member/network/request/:id/accept` - Accept request
- `DELETE /api/member/network/request/:id/reject` - Reject request

### Resource Endpoints
- `GET /api/member/resources/accessed` - Get my resources
- `POST /api/member/resources/:id/access` - Access resource
- `GET /api/member/resources/:id/download` - Download resource

---

# SUMMARY TABLE

| # | Page | Path | Status | Users | Key Purpose |
|---|------|------|--------|-------|------------|
| 1 | Homepage | `/` | ✅ | All | Brand showcase, navigation hub |
| 2 | About | `/about` | ✅ | All | Organization info, leadership |
| 3 | Hotels | `/hotels` | ✅ | All | Member hotels discovery |
| 4 | Destinations | `/destinations` | ✅ | All | Tourist destinations |
| 5 | Events | `/events` | ✅ | All | Event discovery, RSVP |
| 6 | Gallery | `/gallery` | ✅ | All | Photo/video showcase |
| 7 | Members | `/members` | ✅ | All | Member directory |
| 8 | Resources | `/resources` | ✅ | All | Training materials |
| 9 | Careers | `/careers` | ✅ | All | Job listings |
| 10 | Contact | `/contact` | ✅ | All | Contact methods |
| 11 | Login | `/login` | ✅ Demo | Members/Admins | Authentication |
| 12 | Sign Up | `/signup` | ✅ Demo | Public | User registration |
| 13 | Forgot Password | `/forgot-password` | ✅ Demo | Users | Password reset |
| 14 | Member Portal | `/member-portal` | ✅ | Members | Dashboard entry |
| 15 | Member Dashboard | `/member-portal/dashboard` | ✅ UI | Members | Personal hub |
| 16 | Admin Home | `/admin` | ✅ | Admins | Admin entry |
| 17 | Admin Dashboard | `/admin/dashboard` | ✅ UI | Admins | Management hub |
| 18-22 | Admin Managers | `/admin/*` | ✅ UI | Admins | Content management |
| 23 | Hotel Detail | `/hotels/[id]` | ✅ | All | Hotel information |
| 24 | Destination Detail | `/destinations/[id]` | ✅ | All | Destination info |
| 25 | Event Detail | `/events/[id]` | ✅ | All | Event information |
| 26 | Job Detail | `/careers/[id]` | ✅ | All | Job posting |
| 27 | Member Detail | `/members/[id]` | ✅ | All | Member profile |
| 28 | Blog Post | `/resources/blog/[id]` | ✅ | All | Article content |
| 29 | Contact API | `/api/contact` | 🔄 | All | Contact submission |
| 30 | Auth APIs | `/api/auth/*` | 🔄 | System | Authentication |
| 31 | Admin APIs | `/api/admin/*` | 🔄 | Admins | Management |
| 32 | Member APIs | `/api/member/*` | 🔄 | Members | Member functions |

---

# IMPLEMENTATION PRIORITIES

## Phase 1: Public Features (Currently Complete)
✅ Homepage, About, Hotels, Destinations, Events, Gallery, Members, Resources, Careers, Contact

## Phase 2: Authentication (In Progress)
🔄 Login, Sign Up, Forgot Password - UI Complete, Need Backend
🔄 `/api/auth/*` endpoints

## Phase 3: Member Portal (UI Complete)
🔄 Member Dashboard - UI Complete
🔄 `/api/member/*` endpoints

## Phase 4: Admin Panel (UI Complete)
🔄 Admin Dashboard - UI Complete
🔄 Admin Managers (Hotels, Destinations, Events, Members)
🔄 `/api/admin/*` endpoints

## Phase 5: Advanced Features (Future)
- Email verification
- Two-factor authentication
- Member payment/subscription
- Advanced analytics
- Automated notifications
- Real-time features (WebSockets)

---

# TECHNICAL NOTES

### Current Tech Stack
- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, Custom components
- **State:** React Context, Local state
- **Forms:** React Hook Form, Zod validation
- **Database:** Not yet implemented
- **Authentication:** JWT (to be implemented)
- **Email:** SendGrid/AWS SES (to be implemented)

### Performance Optimizations Implemented
- ✅ Image optimization with Next.js Image
- ✅ Code splitting per route
- ✅ CSS minification
- ✅ Lazy loading components
- ⚠️ Todo: Database query optimization
- ⚠️ Todo: Caching strategies

### Security Measures to Implement
- ✅ Input validation with Zod
- ⚠️ Todo: SQL injection prevention
- ⚠️ Todo: XSS protection
- ⚠️ Todo: CSRF tokens
- ⚠️ Todo: Rate limiting
- ⚠️ Todo: Secure password hashing

---

**Document Version:** 1.0.0  
**Last Updated:** December 17, 2025  
**Status:** Complete Use Case Documentation
