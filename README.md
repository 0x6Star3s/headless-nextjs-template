# Headless-nextjs-template

![screencapture-headless-nextjs-template-vercel-app-admin-presentation-2024-08-29-14_29_57 1](https://github.com/user-attachments/assets/fd46cebe-3e64-4e0f-b302-7360cbda003e)



Visit [demo](https://headless-nextjs-template.vercel.app/) 


## Key Features

- [x]  [Pre-configured Sanity schema](https://github.com/0x6Star3s/headless-nextjs-template/tree/main/src/config/cms/schemas) for rapid content structuring.
- [x]  [Pre-built frontend components](https://github.com/0x6Star3s/headless-nextjs-template/tree/main/src/components) for rapid website development.
- [x]  Visual editing right inside the Embedded Sanity Studio.
- [x]  Auto-generated Table of Contents component based on headings.
- [x]  Auto-generated sitemap.xml and blog rss.xml.


## Tech Stack

Next.js 14 (App Router, RSC, Typescript), Tailwind CSS and scss

### Add modules
  
https://github.com/user-attachments/assets/6de55c95-cc89-4210-a43d-01d97c59d387

### Changing the position of a section

https://github.com/user-attachments/assets/24877048-de91-40d6-bfd6-346763b45ea1

### Demo of Creative module

https://github.com/user-attachments/assets/9c422bc9-b859-4f40-92ce-8c639adec509

### Review changes

https://github.com/user-attachments/assets/92ca7e95-cb31-4584-80ff-fa357d592ee1

### Different versions of the button (cta)

https://github.com/user-attachments/assets/9266f51b-f62c-480b-b42a-120f0eb09a58

### How quickly you can change the content on the page

https://github.com/user-attachments/assets/270b5298-2a59-420b-97e2-ae28b90c73c1

### How to add any photo from unsplash

https://github.com/user-attachments/assets/a348ab15-8660-41a7-a95b-f1306b948cc1

## Getting Started

Clone or fork the template from [the GitHub template](https://github.com/0x6Star3s/headless-nextjs-template).

### 2. Get a new Sanity project ID

From the [Sanity.io Manage](https://sanity.io/manage) dashboard, create a new project _from scratch (blank schema) with CLI_.

### 3. Update environment variables

```sh
# .env.local
NEXT_PUBLIC_BASE_URL = ... # http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID = ... # abcdefgh
NEXT_PUBLIC_SANITY_TOKEN = ... # retrieve from https://sanity.io/manage

NEXT_PUBLIC_SANITY_DATASET= ... # production
NEXT_PUBLIC_SANITY_API_VERSION= ... # 2024-07-01
```

### 4. Populate the Studio with your content

Open your new Sanity Studio (`‌https://localhost:3000/admin`) and publish the following documents:

1. a **Page** document with slug: `index` to use as the _Home_ page.

For websites with a blog, additionally publish the following documents:

2. a **Page** document with slug: `blog` to use as the _Blog listing_ page.
3. a **Page** document with slug: `blog/*` to use as the _Blog post_ template page.

### Optionally, you can publish the following documents:

- a **Page** document with slug: `404` to use as the _Page not found_ page.

