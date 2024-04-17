# Deeep Logitech Assignments

This assignment is a Node.js app that gets the newest 6 stories from Time.com. It doesn't use any outside tools, just the basic parts of Node.js like `http`.

## Features

- Scrapes Time.com for latest stories
- Sets up HTTP server
- Provides API endpoint: `/getTimeStories`
- Doesn't use external libraries
- Returns stories in JSON format
- Handles errors
- Can be extended easily

## Getting Started

### Prerequisites

- Ensure that Node.js is installed on your computer.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/UmerAhmad9126/deep-logitech-assignments.git
    ```
### Usage

1. Start the application:
    ```bash
    node index.js
    ```

2. Access the API endpoint:
    - Once the server is running, you can access the API endpoint at http://localhost:3000/getTimeStories
    - The API returns a JSON response containing the latest 6 stories from Time.com's homepage.

### Example API Response

```json
[
    {
        "title": "The U.K. to Vote on World's Only Generational Smoking Ban",
        "url": "https://time.com/6967337/uk-generational-smoking-ban/"
    },
    {
        "title": "Tech Firms Fall Short on Election Security",
        "url": "https://time.com/6967334/ai-elections-disinformation-meta-tiktok/"
    },
    {
        "title": "Patrick Mahomes Is Rewriting the Playbook",
        "url": "https://time.com/6966732/patrick-mahomes-interview-time100-2024/"
    },
    {
        "title": "Patrick Mahomes Is on the 2024 TIME100",
        "url": "https://time.com/6964929/patrick-mahomes-time100-2024/"
    },
    {
        "title": "Ozempic Hurts the Fight Against Eating Disorders",
        "url": "https://time.com/6966957/ozempic-eating-disorders-essay/"
    },
    {
        "title": "How VR Could Transform Architecture",
        "url": "https://time.com/6964951/vr-virtual-reality-architecture-meta-quest/"
    }
]
