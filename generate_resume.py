import os

pdf_template = """%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
6 0 obj
<< /Length {stream_len} >>
stream
BT
/F2 26 Tf
50 780 Td
(BINGI MANYA SAHASRA) Tj
/F1 12 Tf
0 -24 Td
(Hyderabad, India | sahasramanya9@gmail.com | linkedin.com/in/manya2929 | github.com/ManyaSaaha9) Tj
0 -25 Td
(--------------------------------------------------------------------------------------------------------------------------------------) Tj
/F2 16 Tf
0 -30 Td
(PROFESSIONAL SUMMARY) Tj
/F1 11 Tf
0 -18 Td
(Passionate Computer Science student specializing in Artificial Intelligence and Machine Learning with) Tj
0 -15 Td
(experience building AI-powered applications using Python, NLP, Machine Learning, and Generative AI.) Tj
0 -15 Td
(Focused on solving real-world problems through technology.) Tj
/F2 16 Tf
0 -30 Td
(EDUCATION) Tj
/F2 11 Tf
0 -18 Td
(B.Tech in Computer Science Engineering (AI & ML)) Tj
/F1 11 Tf
0 -15 Td
(Malla Reddy College of Engineering and Technology | CGPA: 9.5/10) Tj
/F2 16 Tf
0 -30 Td
(PROFESSIONAL EXPERIENCE) Tj
/F2 11 Tf
0 -18 Td
(AI Intern - Infosys Springboard) Tj
/F1 11 Tf
0 -15 Td
(- Developed AI-powered ticket categorization systems) Tj
0 -15 Td
(- Applied NLP techniques for automation) Tj
0 -15 Td
(- Participated in testing and debugging) Tj
0 -15 Td
(- Contributed to documentation and workflow improvement) Tj
/F2 16 Tf
0 -30 Td
(PROJECTS) Tj
/F2 11 Tf
0 -18 Td
(AI Resume Analyzer) Tj
/F1 11 Tf
0 -15 Td
(Python, Streamlit, NLP, Machine Learning) Tj
0 -15 Td
(ATS Score Analysis, Resume Feedback Generation, PDF Parsing, NLP-based Evaluation) Tj
/F2 11 Tf
0 -25 Td
(AI Copilot for Software Engineers) Tj
/F1 11 Tf
0 -15 Td
(Python, Streamlit, NLP, Generative AI) Tj
0 -15 Td
(Coding Assistance, Debugging Support, Intelligent Query Processing, Documentation Generation) Tj
/F2 16 Tf
0 -30 Td
(SKILLS) Tj
/F1 11 Tf
0 -18 Td
(Languages: Python, Java, C, SQL) Tj
0 -15 Td
(Web Technologies: HTML, CSS, JavaScript, React.js) Tj
0 -15 Td
(AI & Machine Learning: Machine Learning, NLP, Generative AI, Prompt Engineering) Tj
0 -15 Td
(Libraries & Tools: Pandas, NumPy, Scikit-learn, Streamlit, Git, GitHub, VS Code, Tableau) Tj
0 -15 Td
(Core Concepts: Data Structures & Algorithms, OOP, DBMS, REST APIs, Unit Testing, Debugging) Tj
/F2 16 Tf
0 -30 Td
(LEADERSHIP & CERTIFICATIONS) Tj
/F1 11 Tf
0 -18 Td
(- Student Coordinator: Organized hackathons, project expos, technical quizzes, student activities) Tj
0 -15 Td
(- Class Representative: Represented student concerns, facilitated communication, supported coordination) Tj
0 -15 Td
(- Certifications: IBM SkillsBuild (AI Fundamentals), Deloitte Technology Simulation, Google Cloud Study Jams) Tj
ET
endstream
endobj
"""

def generate_pdf():
    # Content of the stream
    stream_content = """BT
/F2 26 Tf
50 780 Td
(BINGI MANYA SAHASRA) Tj
/F1 12 Tf
0 -24 Td
(Hyderabad, India | sahasramanya9@gmail.com | linkedin.com/in/manya2929 | github.com/ManyaSaaha9) Tj
0 -25 Td
(--------------------------------------------------------------------------------------------------o) Tj
/F2 16 Tf
0 -30 Td
(PROFESSIONAL SUMMARY) Tj
/F1 11 Tf
0 -18 Td
(Passionate Computer Science student specializing in Artificial Intelligence and Machine Learning with) Tj
0 -15 Td
(experience building AI-powered applications using Python, NLP, Machine Learning, and Generative AI.) Tj
0 -15 Td
(Focused on solving real-world problems through technology.) Tj
/F2 16 Tf
0 -30 Td
(EDUCATION) Tj
/F2 11 Tf
0 -18 Td
(B.Tech in Computer Science Engineering (AI & ML)) Tj
/F1 11 Tf
0 -15 Td
(Malla Reddy College of Engineering and Technology | CGPA: 9.5/10) Tj
/F2 16 Tf
0 -30 Td
(PROFESSIONAL EXPERIENCE) Tj
/F2 11 Tf
0 -18 Td
(AI Intern - Infosys Springboard) Tj
/F1 11 Tf
0 -15 Td
(- Developed AI-powered ticket categorization systems) Tj
0 -15 Td
(- Applied NLP techniques for automation) Tj
0 -15 Td
(- Participated in testing and debugging) Tj
0 -15 Td
(- Contributed to documentation and workflow improvement) Tj
/F2 16 Tf
0 -30 Td
(PROJECTS) Tj
/F2 11 Tf
0 -18 Td
(AI Resume Analyzer) Tj
/F1 11 Tf
0 -15 Td
(Python, Streamlit, NLP, Machine Learning) Tj
0 -15 Td
(ATS Score Analysis, Resume Feedback Generation, PDF Parsing, NLP-based Evaluation) Tj
/F2 11 Tf
0 -25 Td
(AI Copilot for Software Engineers) Tj
/F1 11 Tf
0 -15 Td
(Python, Streamlit, NLP, Generative AI) Tj
0 -15 Td
(Coding Assistance, Debugging Support, Intelligent Query Processing, Documentation Generation) Tj
/F2 16 Tf
0 -30 Td
(SKILLS) Tj
/F1 11 Tf
0 -18 Td
(Languages: Python, Java, C, SQL | Web: HTML, CSS, JS, React.js) Tj
0 -15 Td
(AI & ML: Machine Learning, NLP, Generative AI, Prompt Engineering) Tj
0 -15 Td
(Libraries & Tools: Pandas, NumPy, Scikit-learn, Streamlit, Git, GitHub, VS Code, Tableau) Tj
0 -15 Td
(Concepts: Data Structures & Algorithms, OOP, DBMS, REST APIs, Unit Testing) Tj
/F2 16 Tf
0 -30 Td
(LEADERSHIP & CERTIFICATIONS) Tj
/F1 11 Tf
0 -18 Td
(- Student Coordinator: Organized hackathons, project expos, quizzes, and student activities) Tj
0 -15 Td
(- Class Representative: Represented student concerns, facilitated academic coordination) Tj
0 -15 Td
(- Certifications: IBM SkillsBuild (AI Fundamentals), Deloitte Tech Simulation, Google Cloud Study Jams) Tj
ET"""
    
    stream_len = len(stream_content)
    
    # Write objects and compute positions
    objs = []
    
    # Header
    objs.append(b"%PDF-1.4\n")
    
    # 1 0 obj
    pos_1 = sum(len(x) for x in objs)
    objs.append(b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
    
    # 2 0 obj
    pos_2 = sum(len(x) for x in objs)
    objs.append(b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")
    
    # 3 0 obj
    pos_3 = sum(len(x) for x in objs)
    objs.append(b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n")
    
    # 4 0 obj
    pos_4 = sum(len(x) for x in objs)
    objs.append(b"4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")
    
    # 5 0 obj
    pos_5 = sum(len(x) for x in objs)
    objs.append(b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n")
    
    # 6 0 obj
    pos_6 = sum(len(x) for x in objs)
    stream_header = f"6 0 obj\n<< /Length {stream_len} >>\nstream\n".encode('ascii')
    stream_body = stream_content.encode('ascii')
    stream_footer = b"\nendstream\nendobj\n"
    objs.append(stream_header + stream_body + stream_footer)
    
    # xref table
    pos_xref = sum(len(x) for x in objs)
    xref_table = f"xref\n0 7\n0000000000 65535 f \n{pos_1:010d} 00000 n \n{pos_2:010d} 00000 n \n{pos_3:010d} 00000 n \n{pos_4:010d} 00000 n \n{pos_5:010d} 00000 n \n{pos_6:010d} 00000 n \n".encode('ascii')
    objs.append(xref_table)
    
    # trailer
    trailer = f"trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n{pos_xref}\n%%EOF\n".encode('ascii')
    objs.append(trailer)
    
    # Create directory if not exists
    os.makedirs('assets/docs', exist_ok=True)
    
    with open('assets/docs/bingi_manya_sahasra_resume.pdf', 'wb') as f:
        f.write(b"".join(objs))
        
    print("PDF generated successfully.")

if __name__ == '__main__':
    generate_pdf()
