exports.dummyContent = `
<!-- wp:paragraph -->
<p> In case you are learning DSA, you should definitely check out our free <a href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/">A2Z DSA Course</a> with videos and blogs.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In case you want to read basic <strong>input/output</strong> in <strong><a href="https://takeuforward.org/java/basic-input-and-output-in-java/" target="_blank" rel="noopener" title="">Java</a></strong> and <strong><a href="https://takeuforward.org/python/input-output-and-import-in-python/" target="_blank" rel="noopener" title="">Python</a></strong>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When you embark on your C++ programming journey, it's perfectly okay not to dive too deep into the intricacies of the language right from the start. In fact, it's advisable to initially focus on grasping the big picture and building a strong foundation. In this guide, we'll walk you through the basic skeleton of a C++ program and the essential components you need to know to get started.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><strong>Including Libraries</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>C++ is a versatile language, and it relies on libraries to access various functionalities. To perform tasks like input and output, we include specific libraries at the beginning of our code. For instance<strong>, #include&lt;iostream&gt; </strong>is used for input and output operations, while <strong>#include&lt;math.h&gt;</strong> allows us to use mathematical functions. Simply put, libraries provide pre-built functions and tools for us to use in our code.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3><strong>The Generic Skeleton</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>The generic skeleton of a C++ program consists of two main components: the <strong>library inclusion</strong> and the <strong>main function</strong>. After including the necessary libraries, you declare the main function using int main() { /* Your code here */ return 0; }. This serves as the entry point for your program.</p>
<!-- /wp:paragraph -->

<!-- wp:preformatted -->
<pre class="wp-block-preformatted">#include&lt;iostream&gt;

int main() {
    // Your code here
    return 0;
}
</pre>
<!-- /wp:preformatted -->

<!-- wp:heading {"level":3} -->
<h3><strong>Output with cout</strong></h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To display output in C++, you'll commonly use the cout function from the iostream library. However, you need to specify that it belongs to the std (standard) namespace. For instance, <strong>std::cout &lt;&lt; "Hey, Striver!";</strong> will print "Hey, Striver!" to the console. You enclose the text you want to display within double quotation marks.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p> <strong>Code:</strong> </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
    <div class="code-section secondary-details">
    <div class="code-tabs">
    <button class="code-tab dsa_article_code_active" data-lang="cpp">C++</button>
    
    <svg width="17" class="copy-btn" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4H2V18H13V20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z">
    </path>
    </svg>
    </div>
    <div class="code-content">
    <div class="code-block dsa_article_code_active" data-lang="cpp">
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code lang="cpp" class="language-cpp">#include&lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hey, Striver!";
    return 0;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Output: </strong>Hey, Striver!</p>
<!-- /wp:paragraph -->
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If we want to print <strong>Hey, Striver! twice in 2 lines</strong> and we write <strong>std::cout &lt;&lt; "Hey, Striver!";</strong> again and again then it will print it consecutively on the same line.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p> <strong>Code:</strong> </p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
    <div class="code-section secondary-details">
    <div class="code-tabs">
    <button class="code-tab dsa_article_code_active" data-lang="cpp">C++</button>
    
    <svg width="17" class="copy-btn" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4H2V18H13V20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z">
    </path>
    </svg>
    </div>
    <div class="code-content">
    <div class="code-block dsa_article_code_active" data-lang="cpp">
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code lang="cpp" class="language-cpp">#include&lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hey, Striver!" &lt;&lt; std::endl;
    std::cout &lt;&lt; "Hey, Striver!";
    return 0;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Output: </strong>Hey, Striver!<br/>Hey, Striver!</p>
<!-- /wp:paragraph -->
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><strong>Code:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
    <div class="code-section secondary-details">
    <div class="code-tabs">
    <button class="code-tab dsa_article_code_active" data-lang="cpp">C++</button>
    
    <svg width="17" class="copy-btn" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20C1.45 20 0.979002 19.804 0.587002 19.412C0.195002 19.02 -0.000664969 18.5493 1.69779e-06 18V4H2V18H13V20H2ZM6 16C5.45 16 4.979 15.804 4.587 15.412C4.195 15.02 3.99934 14.5493 4 14V2C4 1.45 4.196 0.979002 4.588 0.587002C4.98 0.195002 5.45067 -0.000664969 6 1.69779e-06H15C15.55 1.69779e-06 16.021 0.196002 16.413 0.588002C16.805 0.980002 17.0007 1.45067 17 2V14C17 14.55 16.804 15.021 16.412 15.413C16.02 15.805 15.5493 16.0007 15 16H6ZM6 14H15V2H6V14Z">
    </path>
    </svg>
    </div>
    <div class="code-content">
    <div class="code-block dsa_article_code_active" data-lang="cpp">
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code lang="cpp" class="language-cpp">#include&lt;iostream&gt;

int main() {
    std::cout &lt;&lt; "Hey, Striver!" &lt;&lt; "Hey, Striver!";
    return 0;
}
</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p><strong>Output:</strong>Hey, Striver!Hey, Striver!</p>
<!-- /wp:paragraph -->

</div>
</div>
</div>
</div>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>In conclusion, if you want to print text on different lines, use std::endl. If you want to print text on the same line, don't use std::endl. Instead, use only the insertion operator (<<).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>If you have any questions or need further assistance with C++ programming or any other topic, feel free to ask!</p>
<!-- /wp:paragraph -->
`;