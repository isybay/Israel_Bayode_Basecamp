{
   "cell_type": "code",
   "execution_count": null,
   "id": "c15e09d5",
   "metadata": {},
   "outputs": [],
   "source": [
    "# Task 9\n",
    "\n",
    "def is_palindrome():\n",
    "    \n",
    "    string = input(\"Enter string: \")\n",
    "    \n",
    "    reversedString = ''\n",
    "    index = len(string) # calculate length of string and save in index\n",
    "    while index > 0: \n",
    "        reversedString += string[ index - 1 ] # save the value of str[index-1] in reverseString\n",
    "        index = index - 1 \n",
    "\n",
    "    return string == reversedString"
   ]
  }
