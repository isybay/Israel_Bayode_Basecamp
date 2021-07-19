{
   "cell_type": "code",
   "execution_count": null,
   "id": "28cf1d5d",
   "metadata": {},
   "outputs": [],
   "source": [
    "#Task 3\n",
    "\n",
    "def extract_primes():\n",
    "    \n",
    "    n = int(input(\"Enter the size of the list \"))\n",
    "    print(\"\\n\")\n",
    "    num_list = list(int(num) for num in input(\"Enter the list items separated by space \").strip().split())[:n]\n",
    "    print(\"User list: \", num_list)\n",
    "    \n",
    "    return [num for num in num_list if is_it_prime(num)]"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "id": "0b9e0345",
   "metadata": {},
   "outputs": [],
   "source": [
    "extract_primes()"
   ]
  }
