# Reaction Test

A simple, fun browser game to measure how fast you can react.

A randomly colored shape (a circle or a square) appears on the screen after a short, random delay. Click it as fast as you can and the game shows your reaction time in seconds. A new shape pops up right away, so you can keep going and beat your own score.

### 🎮 Play it live

👉 **[Try the Reaction Test here →](https://kunalsk36.github.io/Reaction-Test/)**

Or open `index.html` in any modern browser to play it locally.

---

## ✨ Features

- Random delay before each shape appears (0 – 2000 ms)
- Random shape size, position and color
- Circles and squares (rounded corners at random)
- Live reaction time display
- Instant replay — the next shape appears right after you click
- Zero dependencies, works offline

## 🎮 How to Play

**Online:** open the live demo at <https://kunalsk36.github.io/Reaction-Test/>

**Locally:**

1. Open `index.html` in any modern browser.
2. Wait for a shape to appear.
3. Click it as fast as you can.
4. Check your time in the "Your time is" line.
5. Repeat and try to beat your record!

> 💡 Tip: Don't stare at the screen waiting — the delay is random, so stay focused on the whole area.

## 🛠️ Tech Stack

| Layer    | Technology                     |
| -------- | ------------------------------ |
| Markup   | HTML5                          |
| Styles   | CSS3 (flexbox, inline styles) |
| Logic    | Vanilla JavaScript             |
| Build    | None — plain static files      |

## 📁 Project Structure

```
Reaction Test Game/
├── index.html         # Page markup, links CSS + JS
├── reactionTest.css   # Layout and styling
├── reactionTest.js    # Game logic (delay, shape, timing)
└── README.md          # You are here
```

## ⚙️ How It Works

1. `afterDelay()` waits a random time between 0 and 2000 ms.
2. `makeShapeAppear()` resets the timer, then sets a random position, size, color and border radius on the `#shapes` element and shows it.
3. On click, the shape is hidden, the elapsed time (in seconds) is written into `#timeTaken`, and the cycle starts again with a new `afterDelay()` call.

## 🚀 Run It

**Play online:** <https://kunalsk36.github.io/Reaction-Test/>

No installation needed. Just double-click the HTML file, or serve it locally:

```bash
# Option 1: open directly
start index.html

# Option 2: with a simple local server
python -m http.server 8000
```

Then visit <http://localhost:8000/> (or <http://localhost:8000/index.html>).

## 🛠️ Customization

- **Faster / slower shapes:** change `Math.random() * 2000` in `reactionTest.js`.
- **Shape area:** adjust the `260` (top) and `700` (left) limits in `makeShapeAppear()`.
- **Shape size:** adjust `Math.random() * 150 + 100`.
- **Colors & background:** edit `reactionTest.css`.

## 👤 Author

Made with ❤️ by Kunal

🔗 Live demo: <https://kunalsk36.github.io/Reaction-Test/>
