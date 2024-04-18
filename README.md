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
    npm run server
    ```

2. Access the API endpoint:
    - Once the server is running, you can access the API endpoint at http://localhost:3000/getTimeStories
    - The API returns a JSON response containing the latest 6 stories from Time.com's homepage.

### Example API Response

```json
[
    {
        "title": "Boeing Pushes Back on Whistleblower's Claims",
        "url": "https://time.com/6968220/boeing-whistleblowers-allegations/"
    },
    {
        "title": "Nestlé Adds Sugar to Baby Food in Poorer Nations",
        "url": "https://time.com/6968112/nestle-sugar-baby-milk-cereal-poorer-nations/"
    },
    {
        "title": "Aung San Suu Kyi Moved From Prison to House Arrest Due to Heat",
        "url": "https://time.com/6968096/aung-san-suu-kyi-myanmar-prison-house-arrest-heat/"
    },
    {
        "title": "What's the Deal With the Bitcoin Halving?",
        "url": "https://time.com/6967414/bitcoin-halving-countdown-event-2024/"
    },
    {
        "title": "No, You Don't Need to Chug Olive Oil",
        "url": "https://time.com/6967480/olive-oil-shot-healthy/"
    },
    {
        "title": "Weight-Loss Drugs Help Sleep Apnea",
        "url": "https://time.com/6968064/weight-loss-drugs-sleep-apnea/"
    }
]
