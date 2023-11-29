# Currency Converter App

A simple web application built with React to convert between different currencies using real-time exchange rates.

## Features

- **Currency Conversion:** Convert from one currency to another.
- **Exchange Rate Display:** View exchange rates for various currencies.
- **User-Friendly Interface:** Intuitive design for a seamless user experience.

## Getting Started

Follow these steps to get a local copy of the project up and running on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Git](https://git-scm.com/) for version control.

### Installation

1. Clone this repository to your local machine.

    ```bash
    git clone <repository-url>
    ```

2. Change into the project directory.

    ```bash
    cd currency-converter-app
    ```

3. Install dependencies.

    ```bash
    npm install
    ```

### Usage

1. Start the development server.

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

3. Select the source and target currencies, enter the amount, and see the conversion result.

## API Key

This application uses the [FastForex API](https://fastforex.io/) to fetch exchange rates. The API key included in the code is temporary and provided for demonstration purposes. For long-term use or deployment, it's recommended to obtain your own API key from [FastForex](https://fastforex.io/).

## Note

The provided API key is valid for one week. After that period, you'll need to replace it with your own key.

## Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- This project was inspired by the need for a simple and effective currency converter.
- Special thanks to [FastForex](https://fastforex.io/) for providing the exchange rate API.
