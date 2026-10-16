# Resume PDF generator matching Bingi Manya Sahasra's resume
import os

def create_resume_pdf(filename="assets/docs/bingi_manya_sahasra_resume.pdf"):
    # Page size: 595 x 842 (A4)
    # Margins: Left 45, Right 550 (Width: 505)
    
    stream_lines = []
    
    # Helper to add text at (x, y)
    def add_text(x, y, font, size, text):
        stream_lines.append(f"BT /{font} {size} Tf 1 0 0 1 {x:.1f} {y:.1f} Tm ({text}) Tj ET")
        
    def add_line(x1, y1, x2, y2, gray=0.75, width=0.75):
        stream_lines.append(f"q {gray:.2f} {gray:.2f} {gray:.2f} RG {width:.2f} w {x1:.1f} {y1:.1f} m {x2:.1f} {y2:.1f} l S Q")

    # Header
    y = 800
    add_text(182, y, "F2", 22, "Bingi Manya Sahasra")
    
    y -= 18
    # Contact line 1: Centered
    contact1 = "Hyderabad, Telangana, India | +91 86394 01281 | sahasramanya9@gmail.com"
    add_text(128, y, "F1", 9.5, contact1)
    
    y -= 14
    contact2 = "linkedin.com/in/manya2929 | github.com/ManyaSaaha9 | manya-portfolio-three.vercel.app"
    add_text(105, y, "F1", 9.5, contact2)
    
    # Section helper
    def section_header(title, cur_y):
        cur_y -= 22
        add_text(45, cur_y, "F2", 11, title)
        cur_y -= 4
        add_line(45, cur_y, 550, cur_y, gray=0.7, width=0.6)
        return cur_y - 12

    # 1. SUMMARY
    y = section_header("SUMMARY", y)
    add_text(45, y, "F1", 9.5, "Third-year B.Tech CSE \\(AI & ML\\) student with a 9.15 CGPA. I build AI projects in Python and am currently a Software")
    y -= 13
    add_text(45, y, "F1", 9.5, "Engineering Intern at UdyogahConnect.")
    
    # 2. SKILLS
    y = section_header("SKILLS", y)
    
    skills = [
        ("Languages:", " Python, Java, C, JavaScript", 62),
        ("AI / ML:", " NLP, Sentence Transformers, scikit-learn, LLM APIs", 45),
        ("Web:", " HTML, CSS, React, FastAPI, Streamlit", 35),
        ("Tools & Database:", " Git, GitHub, VS Code, MySQL", 95),
    ]
    for label, items, w in skills:
        add_text(45, y, "F2", 9.5, label)
        add_text(45 + w, y, "F1", 9.5, items)
        y -= 14
        
    # 3. PROJECTS
    y = section_header("PROJECTS", y)
    
    # Project 1
    add_text(45, y, "F2", 9.5, "AI Resume Analyzer")
    add_text(145, y, "F1", 9.5, "| Python, Streamlit, NLP, Groq API")
    add_text(515, y, "F1", 9.5, "GitHub")
    y -= 13
    add_text(50, y, "F1", 9, "\\225  Web app that scores how well a resume matches a job description and shows missing skills.")
    y -= 12
    add_text(50, y, "F1", 9, "\\225  Uses an AI model to give feedback and rewrite the resume for the job.")
    y -= 15
    
    # Project 2
    add_text(45, y, "F2", 9.5, "AI Copilot for Software Engineers")
    add_text(215, y, "F1", 9.5, "| React, FastAPI, Python")
    add_text(515, y, "F1", 9.5, "GitHub")
    y -= 13
    add_text(50, y, "F1", 9, "\\225  Full-stack assistant that helps developers explain, write and debug code using an AI model.")
    y -= 12
    
    # 4. EXPERIENCE
    y = section_header("EXPERIENCE", y)
    
    # Exp 1
    add_text(45, y, "F2", 9.5, "Software Product Engineering Intern")
    add_text(230, y, "F1", 9.5, "| UdyogahConnect Technologies")
    add_text(465, y, "F1", 9.5, "Jul 2026 \\226 Present")
    y -= 13
    add_text(50, y, "F1", 9, "\\225  Working on a business software platform across web, mobile and AI features.")
    y -= 15
    
    # Exp 2
    add_text(45, y, "F2", 9.5, "AI Intern")
    add_text(90, y, "F1", 9.5, "| Infosys Springboard")
    add_text(455, y, "F1", 9.5, "Feb 2026 \\226 Mar 2026")
    y -= 13
    add_text(50, y, "F1", 9, "\\225  Worked in a team on an AI system that creates and categorizes support tickets using Python and NLP.")
    y -= 12

    # 5. EDUCATION
    y = section_header("EDUCATION", y)
    
    # Edu 1
    add_text(45, y, "F2", 9.5, "Malla Reddy College of Engineering and Technology")
    add_text(490, y, "F1", 9.5, "2024 \\226 2028")
    y -= 13
    add_text(45, y, "F1", 9, "B.Tech, CSE \\(AI & ML\\) | CGPA: 9.15")
    y -= 15
    
    # Edu 2
    add_text(45, y, "F2", 9.5, "Bhavans Sri Aurobindo Junior College")
    add_text(490, y, "F1", 9.5, "2022 \\226 2024")
    y -= 13
    add_text(45, y, "F1", 9, "Intermediate \\(MPC\\) | 94%")
    y -= 15
    
    # Edu 3
    add_text(45, y, "F2", 9.5, "Bhavans Sri Ramakrishna Vidyalaya")
    add_text(525, y, "F1", 9.5, "2022")
    y -= 13
    add_text(45, y, "F1", 9, "SSC | CGPA: 9.9")
    y -= 12

    # 6. CERTIFICATIONS
    y = section_header("CERTIFICATIONS", y)
    certs = [
        "Microsoft Certified: Azure AI Fundamentals \\226 Microsoft",
        "Responsive Web Design \\226 freeCodeCamp",
        "AI for Beginners \\226 HP LIFE",
        "English Empower C1 \\226 Cambridge",
        "19 Google Cloud Study Jams badges"
    ]
    for c in certs:
        add_text(50, y, "F1", 9, f"\\225  {c}")
        y -= 13
    
    # 7. LEADERSHIP & LANGUAGES
    y = section_header("LEADERSHIP & LANGUAGES", y)
    add_text(45, y, "F2", 9.5, "Technical Lead")
    add_text(115, y, "F1", 9.5, "| Knowvation Learnings, MRCET Hub")
    add_text(460, y, "F1", 9.5, "Aug 2026 \\226 Present")
    y -= 14
    add_text(45, y, "F2", 9.5, "Languages:")
    add_text(105, y, "F1", 9.5, "English, Hindi, Telugu")

    stream_content = "\n".join(stream_lines)
    stream_bytes = stream_content.encode('latin1')
    stream_len = len(stream_bytes)
    
    # Build PDF with WinAnsiEncoding fonts
    pdf_parts = [
        b"%PDF-1.4\n",
        b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
        b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
        b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n",
        b"4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n",
        b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n",
        f"6 0 obj\n<< /Length {stream_len} >>\nstream\n".encode('ascii') + stream_bytes + b"\nendstream\nendobj\n"
    ]
    
    # Compute xref
    objs = pdf_parts
    pos_1 = len(objs[0])
    pos_2 = pos_1 + len(objs[1])
    pos_3 = pos_2 + len(objs[2])
    pos_4 = pos_3 + len(objs[3])
    pos_5 = pos_4 + len(objs[4])
    pos_6 = pos_5 + len(objs[5])
    pos_xref = pos_6 + len(objs[6])
    
    xref_table = (
        f"xref\n0 7\n"
        f"0000000000 65535 f \n"
        f"{pos_1:010d} 00000 n \n"
        f"{pos_2:010d} 00000 n \n"
        f"{pos_3:010d} 00000 n \n"
        f"{pos_4:010d} 00000 n \n"
        f"{pos_5:010d} 00000 n \n"
        f"{pos_6:010d} 00000 n \n"
    ).encode('ascii')
    
    trailer = f"trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n{pos_xref}\n%%EOF\n".encode('ascii')
    
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with open(filename, 'wb') as f:
        f.write(b"".join(pdf_parts) + xref_table + trailer)
        
    print(f"Generated PDF: {filename} ({os.path.getsize(filename)} bytes)")

if __name__ == '__main__':
    create_resume_pdf()
