 {
   "cell_type": "code",
   "execution_count": null,
   "id": "4d3f64dd",
   "metadata": {},
   "outputs": [],
   "source": [
    "# Task 10\n",
    "\n",
    "def most_frq_char():\n",
    "    \n",
    "    string = input(\"Enter string: \")\n",
    "    dic = {}\n",
    "    \n",
    "    for t in string:\n",
    "        if t in dic.keys():\n",
    "            dic[t] = dic[t] + 1\n",
    "        else:\n",
    "            dic[t] = 1\n",
    "            \n",
    "    L = list(dic.values())\n",
    "    m = max(L)\n",
    "    \n",
    "    for l in dic.items():\n",
    "        if l[1] == m:\n",
    "            print(l[0])"
   ]
  }
