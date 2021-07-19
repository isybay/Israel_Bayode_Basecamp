{
   "cell_type": "code",
   "execution_count": null,
   "id": "c408b04e",
   "metadata": {},
   "outputs": [],
   "source": [
    "# Task 7\n",
    "\n",
    "def cal_sd():\n",
    "    \n",
    "    n = int(input(\"Enter the size of the list \"))\n",
    "    print(\"\\n\")\n",
    "    num_list = list(int(num) for num in input(\"Enter the list items separated by space \").strip().split())[:n]\n",
    "    N = len(num_list)\n",
    "    \n",
    "    s1 = 0; s2 =0\n",
    "    \n",
    "    for num in num_list:\n",
    "        s1 = s1 + num\n",
    "    xm = s1/N\n",
    "    \n",
    "    for num in num_list:\n",
    "        s2 = s2 + (num - xm)**2\n",
    "    \n",
    "    return (s2/N)**1/2"
   ]
  }
