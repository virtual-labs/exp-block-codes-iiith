# Procedure

The experiment consists of two sub-experiments. The user is recommended to go through these in the same sequence as they are presented. 

0. Dimension of linear block code and its rate. 
    * Given generator matrix and/or parity check matrix, write down the dimension of the code and its rate. 
1. Encoding
    * For given generator matrix of the linear code, learn how to encode a message vector  
2. Learn how to calculate minimum distance.
    * For given generator matrix, calculate all codewords and the minimum weight. 
3. Learn how to compute parity check matrix, given generator matrix in systematic form. 
    * Compute the two blocks $I_{n-k}$ and $P^T$ and the overall structure of the parity check matrix.  
4. Learn to identify the codewords
    * Given parity check matrix, check if given vector is a codeword or not.     


## Overview of the Experiment window

<div style="text-align: center;">
    <img src="images/exp1_0_0_start.png" alt="alt text" width="75%"/>
</div>

The experiment window consists of the following components:
1. **Task tab**: The task tab contains the list of tasks that need to be performed in the experiment. The user can navigate to any task by clicking on the corresponding task in the task tab.
2. **Instruction box**: The instruction box displays step-by-step instructions to perform the task.
3. **Question box**: The question box displays the question to be answered by the user.
4. **Observation box**: The observation box displays the feedback messages based on the user's input.
5. **Action box**: The action box contains the input elements and buttons to perform the task.


## Sub-Experiment 1: Review of Linear Block Codes

There are three tasks in this sub-experiment.

### Task 1: Dimension and Rate

1. **Find Dimension**: Enter the dimension of the matrix shown in the input box provided as shown in the figure below. 
    <div style="text-align: center;"> <img src="images/exp1_0_0_input.png" alt="alt text" width="75%"/> </div>

2. **Verify the Matrix**: Determine if the matrix is a valid generator matrix. <br>
    <div style="text-align: center;"> <img src="images/exp1_0_0_yesno.png" alt="alt text" width="80%"/> </div> <br>
    - Click on **Yes!** if the matrix is a valid generator matrix. 
    - Click on **No!** if the matrix is not a valid generator matrix.
    - The observation box will display the feedback message accordingly. <br>
      <div style="text-align: center;"> 
      <img src="images/exp1_0_0_obs.png" alt="alt text" width="25%"/> 
      <img src="images/exp1_0_0_incorrect.png" alt="alt text" width="25%"/>
      <img src="images/exp1_0_0_correct.png" alt="alt text" width="25%"/>
      </div>

3. **Calculate Code Rate**: Once a true generator matrix is identified and confirmed, calculate the rate of the code. The rate is given by the ratio of the dimension to the block length (length of the code). Enter the dimension and the block length in the input boxes provided. <br>
    <img src="images/exp1_0_0_rate.png" alt="alt text" width="25%"/><br>
    - Click on **Check** to verify the correctness of the rate. The Observation box will display the feedback message accordingly. 
      

### Task 2: Encoding

1. **Encode Message**: Enter the message vector by clicking on the message bits. <br>
    <img src="images/exp1_0_1_input.png" alt="alt text" width="75%"/><br>
    - Click on **Encode** to encode the message vector. The entered codeword will be displayed in the Observation box and you will be take to next step.

2. **Enter Codeword**: Enter the codeword by clicking on the codeword bits. <br>
    <img src="images/exp1_0_1_codeword.png" alt="alt text" width="75%"/><br>
    - Click on **Check** to verify the correctness of the codeword. The Observation box will display the feedback message accordingly.


### Task 3: Minimum Distance

1. **Enter all codewords and hamming weight**: Enter all the codewords by clicking on the codeword bits and input the corresponding Hamming weight in the input box provided. <br>
    <img src="images/exp1_0_2_minimumdistance.png" alt="alt text" width="75%"/><br>
    - Click on **Next** to verify the correctness of the minimum distance. The Observation box will display the feedback message accordingly.

2. **Enter the minimum distance**: Enter the minimum distance of the code in the input box provided. <br>
    <img src="images/exp1_0_2_minimumdistance_input.png" alt="alt text" width="75%"/><br>
    - Click on **Check** to verify the correctness of the minimum distance. The Observation box will display the feedback message accordingly.

    

