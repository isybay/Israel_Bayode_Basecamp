{
   "cell_type": "code",
   "execution_count": null,
   "id": "a38225ce",
   "metadata": {},
   "outputs": [],
   "source": [
    "# Task 4\n",
    "\n",
    "def psw_validator():\n",
    "    \n",
    "    p = input(\"Enter your password\")\n",
    "    SpecialSym =['$', '@', '#', '%', '!']\n",
    "    \n",
    "    if p.isalpha():\n",
    "        print('Very weak Password')\n",
    "    elif p.isdigit():\n",
    "        print('Weak Password')\n",
    "    elif p.isalnum() == True:\n",
    "        print('Strong Password')\n",
    "    else:\n",
    "        if any(char in SpecialSym for char in p):\n",
    "            print('Very Strong Password')"
   ]
  }
