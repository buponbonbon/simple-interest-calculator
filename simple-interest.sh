#!/bin/bash
# Script to compute simple interest
# Formula: SI = (P * R * T) / 100

echo "Enter the principal amount (P):"
read p
echo "Enter annual rate of interest (R):"
read r
echo "Enter time period in years (T):"
read t

s=$((p * r * t / 100))

echo "The simple interest is: $s"