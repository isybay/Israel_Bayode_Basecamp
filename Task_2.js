{
   "cell_type": "code",
   "execution_count": null,
   "id": "61310f5c",
   "metadata": {},
   "outputs": [],
   "source": [
    "# Task 2\n",
    "\n",
    "def is_it_prime(number):\n",
    "\n",
    "    # prime number is always greater than 1\n",
    "    if number > 1:\n",
    "        for i in range(2, number):\n",
    "            if (number % i) == 0:\n",
    "                return False\n",
    "                break                                           # since it has two factors 1 and itself\n",
    "        else:\n",
    "            return True\n",
    "\n",
    "    # if the entered number is less than or equal to 1\n",
    "    # then it is not prime number\n",
    "    else:\n",
    "        return False"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "d9fc1547",
   "metadata": {},
   "outputs": [],
   "source": [
    "is_it_prime(19)"
   ]
  
