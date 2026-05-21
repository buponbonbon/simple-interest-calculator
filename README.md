# Simple Interest Calculator

A lightweight, web-based command-line application designed to compute simple interest over a specified duration based on the principal amount, annual interest rate, and time period. This project serves as a foundational implementation for mathematical financial scripting.

---

## Core Features

* **Principal Input Processing:** Allows users to input the initial investment or loan capital amount.
* **Rate Analysis Configuration:** Supports configurable annual percentage rates (APR) for precision computation.
* **Time Horizon Tracking:** Computes interest outcomes over discrete yearly or monthly duration bounds.

---

## Formula Utilized

The application operates based on the standard simple interest accounting equation:

$$A = P(1 + rt)$$

Where:
* $P$ represents the **Principal Amount** (the initial amount of money).
* $r$ represents the **Annual Interest Rate** (expressed as a decimal).
* $t$ represents the **Time Period** (expressed in years).
* $A$ represents the **Total Accumulated Amount** (Principal + Interest) after time $t$.

---

## File Structure

* `README.md` - Comprehensive documentation and system overview.
* `LICENSE` - Legal distribution boundaries governed under the Apache License 2.0.
* `simple-interest.sh` - Core executable Bash shell script containing the computational logic.

---

## How to Run the Script

To execute the application locally in a Unix/Linux environment, navigate to the project directory and run the following commands:

```bash
# Grant execution permissions to the script
chmod +x simple-interest.sh

# Run the calculator script
./simple-interest.sh