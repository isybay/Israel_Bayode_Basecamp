{
   "cell_type": "code",
   "execution_count": null,
   "id": "ed912816",
   "metadata": {},
   "outputs": [],
   "source": [
    "# Task 6\n",
    "\n",
    "def sum_check():\n",
    "    \n",
    "    n = int(input(\"Enter the size of the list \"))\n",
    "    print(\"\\n\")\n",
    "    num_list = list(int(num) for num in input(\"Enter the list items separated by space \").strip().split())[:n]\n",
    "    N = len(num_list)\n",
    "    \n",
    "    v = int(input(\" Enter a number\"))\n",
    "    \n",
    "    for i in range(0, N-2):\n",
    "        for j in range(i+1, N-1):\n",
    "            for k in range(j+1, N):\n",
    "                if num_list[i] + num_list[j] + num_list[k] == v:\n",
    "                    return [num_list[i], num_list[j], num_list[k]]\n",
    "                else:\n",
    "                    return -1"
   ]
  }
