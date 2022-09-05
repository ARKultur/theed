# Theed

_theed_ is a simple front-end for our back-office, powered by [Mithril](http://mithril-js.org), and [Tailwind](http://tailwindcss.com).

## Install and run

### Local installation

If you use [ASDF](https://asdf-vm.com/), you can just pull the correct `yarn` and `node` versions from `.tool-versions`.
Otherwise, please make sure your versions match the ones specified in `.tool-versions`

After that, it's just a matter of running:
```bash
yarn install
yarn build  # or `yarn watch`
```

### Using Docker

```bash
# build using
docker build . -t theed
    ...

# Run the app
docker run -p "3000:3000" theed

# Go to localhost:3000 on your browser
```

### graphical specifications

#### Colors & Font

Colors used throughout the project should be the following ones, in order of importance:
```bash
Purple: #8E38FF
Black: #1E1E1E
```

Fonts used throughout the project should be the following ones:
```bash
Creato Display (Fallback: Trebuchet, Helvetica)
Crimson Pro (Fallback: Times New Roman, Georgia)
```

#### WCAG compliance

Current [Standard](https://www.w3.org/TR/WCAG21/)

1. Perceivability

Information and UI must be presentable and separated; so they can be easily perceived. A clear delimitation between components should be made.

Non-text contents should have captions. (Audio should also have descriptions)

The purpose of each input field collecting information about the user must be obvious

Instructions provided for understanding and operating content must not rely only on sensory characteristics of components (shape, color, size, visual location, orientation, or sound)

Color should not be used as the only visual means of conveying information

if any audio on a Web page plays automatically for more than 3 seconds, either a mechanism is available to pause or stop the audio, or a mechanism is available to control audio volume

the visual presentation of web content should have a contrast ratio of at least 3:1 against adjacent colors


2. Operability

All functionality of the content should be operable through a keyboard interface without requiring specific timings for individual keystroke

If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface
    -> Timing is not an essential part of the event or activity presented by the content

When an authenticated session expires, the user can continue the activity without loss of data after re-authenticating

Users are warned of the duration of any user inactivity that could cause data loss

3. Understandability

The page must be readable, the page title must be clear; and the page must have only one purpose

Suggestions and instructions must be provided by the front-end when the user uses a service for the first time

