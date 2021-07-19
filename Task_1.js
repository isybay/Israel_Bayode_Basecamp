{
 "cells": [
  {
   "cell_type": "markdown",
   "id": "7ccd8247",
   "metadata": {},
   "source": [
    "NB: (1) the code snippet contains extract from internet sources as well as originals hard-coded by me.\n",
    "    (2) if you have any troubles deciphering the flow of any of the code dont hesitate to holla me\n",
    "    (3) best of luck!"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "6b5765eb",
   "metadata": {},
   "outputs": [],
   "source": [
    "import math"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "d0bad866",
   "metadata": {},
   "outputs": [],
   "source": [
    "# Task 1\n",
    "\n",
    "def even_odd_sum():\n",
    "    n = int(input(\"Enter the size of the list \"))\n",
    "    print(\"\\n\")\n",
    "    num_list = list(int(num) for num in input(\"Enter the list items separated by space \").strip().split())[:n]\n",
    "\n",
    "    print(\"User list: \", num_list)\n",
    "    \n",
    "    sum_even = 0; sum_odd = 0\n",
    "    for num in num_list:\n",
    "        if num%2 == 0:\n",
    "            sum_even = sum_even + num\n",
    "        else:\n",
    "            sum_odd = sum_odd + num\n",
    "    print()\n",
    "    \n",
    "    return [sum_even, sum_odd]"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "bb29cc4e",
   "metadata": {},
   "outputs": [],
   "source": [
    "even_odd_sum()"
   ]
  }
