{
   "cell_type": "code",
   "execution_count": null,
   "id": "610a99eb",
   "metadata": {},
   "outputs": [],
   "source": [
    "# Task 8\n",
    "\n",
    "def contains_3(string):\n",
    "    if '3' in string:\n",
    "        return True\n",
    "    return False\n",
    "\n",
    "def count_3():\n",
    "    \n",
    "    n = int(input(\"Enter the value of n, to generate list of nos 0 : n \"))\n",
    "    print(\"\\n\")\n",
    "    L = [i for i in range(0, n+1)]\n",
    "    print(\"Generated list: \", L)\n",
    "    \n",
    "    rslt = [p for p in L if contains_3(str(p))]\n",
    "    return {'count':len(rslt), 'numbers': rslt}"
   ]
  }
