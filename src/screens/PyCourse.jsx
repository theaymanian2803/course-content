import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  Calculator,
  Scale,
  Code,
  Terminal,
  Check,
  Copy,
  ChevronRight,
  Activity,
  User,
  Hash,
  FileCode,
  FunctionSquare,
} from 'lucide-react'

const PythonProjects = () => {
  // State to handle copy feedback
  const [copiedState, setCopiedState] = useState({ tip: false, bmi: false })
  // State to handle code tabs (simple vs function)
  const [activeTab, setActiveTab] = useState({ tip: 'simple', bmi: 'simple' })

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedState((prev) => ({ ...prev, [id]: true }))
    setTimeout(() => setCopiedState((prev) => ({ ...prev, [id]: false })), 2000)
  }

  const toggleTab = (project, mode) => {
    setActiveTab((prev) => ({ ...prev, [project]: mode }))
  }

  // --- Project 1: Tip Calculator Code ---

  const tipCodeSimple = `# Simple Version: No Functions
print("Welcome to the Tip Calculator! 💰")

# 1. Inputs
bill = float(input("What was the total bill? $"))
tip = int(input("What percentage tip? 10, 12, or 15? "))
people = int(input("How many people to split the bill? "))

# 2. Calculations
tip_as_percent = tip / 100
total_tip_amount = bill * tip_as_percent

# Update bill variable
bill += total_tip_amount

# Split
bill_per_person = bill / people

# 3. Output
final_amount = "{:.2f}".format(bill_per_person)
print(f"Each person should pay: \${final_amount}")`

  const tipCodeFunction = `# Function Version: Best Practice
def tip_calculator():
    print("Welcome to the Tip Calculator! 💰")
    
    # Inputs
    bill = float(input("What was the total bill? $"))
    tip = int(input("What percentage tip? 10, 12, or 15? "))
    people = int(input("How many people to split the bill? "))
    
    # Calculations
    tip_as_percent = tip / 100
    total_tip_amount = bill * tip_as_percent
    
    # Add tip to bill using +=
    total_bill = bill
    total_bill += total_tip_amount
    
    # Split
    bill_per_person = total_bill / people
    
    # Return formatted string (or print it)
    final_amount = "{:.2f}".format(bill_per_person)
    print(f"Each person should pay: \${final_amount}")

# Call the function to run it
tip_calculator()`

  // --- Project 2: BMI Calculator Code ---

  const bmiCodeSimple = `# Simple Version: Direct Execution
print("Welcome to the BMI Calculator! 🏥")

# 1. Inputs
weight = float(input("Enter weight (kg): "))
height = float(input("Enter height (m): "))

# 2. Logic
bmi = weight / (height ** 2)

# 3. Conditionals
if bmi < 18.5:
    print(f"BMI: {bmi:.2f} -> Underweight")
elif bmi < 25:
    print(f"BMI: {bmi:.2f} -> Normal")
elif bmi < 30:
    print(f"BMI: {bmi:.2f} -> Overweight")
else:
    print(f"BMI: {bmi:.2f} -> Obese")`

  const bmiCodeFunction = `# Function Version: Reusable Logic
def calculate_bmi(weight, height):
    # Calculate and return the raw number
    return weight / (height ** 2)

def interpret_bmi(bmi_value):
    # Logic to interpret the result
    if bmi_value < 18.5:
        return "Underweight"
    elif bmi_value < 25:
        return "Normal Weight"
    elif bmi_value < 30:
        return "Overweight"
    else:
        return "Obese"

# Main execution block
print("Welcome to the BMI Calculator! 🏥")
w = float(input("Enter weight (kg): "))
h = float(input("Enter height (m): "))

my_bmi = calculate_bmi(w, h)
status = interpret_bmi(my_bmi)

print(f"Your BMI is {my_bmi:.2f}. You are: {status}")`

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">
        {/* ==================== PROJECT 1: TIP CALCULATOR ==================== */}
        <section className="space-y-8">
          {/* Header */}
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-800/50 text-blue-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Python Project 01
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Tip Calculator
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              A classic beginner project to master data types, input handling, and the augmented
              assignment operator.
            </p>
          </div>

          {/* Explanations First */}
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Code className="w-5 h-5 text-blue-400" />}
              title="Input Conversion"
              text={
                <span>
                  Inputs are strings by default. Wrap them in{' '}
                  <code className="text-blue-300 bg-blue-900/30 px-1 rounded">float()</code> or{' '}
                  <code className="text-blue-300 bg-blue-900/30 px-1 rounded">int()</code> to do
                  math.
                </span>
              }
            />
            <FeatureCard
              icon={<Hash className="w-5 h-5 text-purple-400" />}
              title="The += Operator"
              text={
                <span>
                  A cleaner way to write{' '}
                  <code className="text-purple-300 bg-purple-900/30 px-1 rounded">x = x + y</code>.
                  It adds to the variable in place.
                </span>
              }
            />
            <FeatureCard
              icon={<User className="w-5 h-5 text-emerald-400" />}
              title="Logic Flow"
              text="The program follows a linear path: Gather Data → Process Math → Output Result. Simple and effective."
            />
          </div>

          {/* Code Block with Tabs */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0F0F0F] shadow-2xl shadow-black/50 ring-1 ring-white/5">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-[#161616] border-b border-slate-800 gap-4">
              <div className="flex items-center gap-4 bg-slate-900/50 p-1 rounded-lg">
                <button
                  onClick={() => toggleTab('tip', 'simple')}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab.tip === 'simple' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>
                  <FileCode className="w-3.5 h-3.5" />
                  Simple Script
                </button>
                <button
                  onClick={() => toggleTab('tip', 'function')}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab.tip === 'function' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>
                  <FunctionSquare className="w-3.5 h-3.5" />
                  With Function
                </button>
              </div>
              <button
                onClick={() =>
                  handleCopy(activeTab.tip === 'simple' ? tipCodeSimple : tipCodeFunction, 'tip')
                }
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all ml-auto sm:ml-0">
                {copiedState.tip ? (
                  <Check className="w-3.5 h-3.5 text-green-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                {copiedState.tip ? 'Copied!' : 'Copy'}
              </button>
            </div>

            {/* Syntax Highlighter */}
            <SyntaxHighlighter
              language="python"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1.5rem',
                background: 'transparent',
                fontSize: '0.9rem',
              }}
              showLineNumbers={true}
              wrapLines={true}>
              {activeTab.tip === 'simple' ? tipCodeSimple : tipCodeFunction}
            </SyntaxHighlighter>
          </div>
        </section>

        {/* Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* ==================== PROJECT 2: BMI CALCULATOR ==================== */}
        <section className="space-y-8">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-900/20 border border-indigo-800/50 text-indigo-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Python Project 02
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              BMI Calculator
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Take it a step further by introducing conditional logic (
              <code className="text-indigo-400">if/elif/else</code>). This teaches your program how
              to make decisions.
            </p>
          </div>

          {/* Explanations First */}
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Scale className="w-5 h-5 text-indigo-400" />}
              title="Mathematical Logic"
              text={
                <span>
                  We use <code className="text-indigo-300 bg-indigo-900/30 px-1 rounded">**</code>{' '}
                  to square the height.{' '}
                  <code className="text-xs opacity-70 block mt-1">Example: 1.75 ** 2 = 3.0625</code>
                </span>
              }
            />
            <FeatureCard
              icon={<Activity className="w-5 h-5 text-rose-400" />}
              title="Control Flow"
              text="The heart of this program. It checks ranges (e.g., 'Is BMI less than 18.5?') to deliver a specific health verdict."
            />
            <FeatureCard
              icon={<ChevronRight className="w-5 h-5 text-orange-400" />}
              title="Return Values"
              text={
                <span>
                  In the function version, we{' '}
                  <code className="text-orange-300 bg-orange-900/30 px-1 rounded">return</code> data
                  instead of just printing it. This makes the logic reusable.
                </span>
              }
            />
          </div>

          {/* Code Block with Tabs */}
          <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0F0F0F] shadow-2xl shadow-black/50 ring-1 ring-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-[#161616] border-b border-slate-800 gap-4">
              <div className="flex items-center gap-4 bg-slate-900/50 p-1 rounded-lg">
                <button
                  onClick={() => toggleTab('bmi', 'simple')}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab.bmi === 'simple' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>
                  <FileCode className="w-3.5 h-3.5" />
                  Simple Script
                </button>
                <button
                  onClick={() => toggleTab('bmi', 'function')}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab.bmi === 'function' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>
                  <FunctionSquare className="w-3.5 h-3.5" />
                  With Function
                </button>
              </div>
              <button
                onClick={() =>
                  handleCopy(activeTab.bmi === 'simple' ? bmiCodeSimple : bmiCodeFunction, 'bmi')
                }
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all ml-auto sm:ml-0">
                {copiedState.bmi ? (
                  <Check className="w-3.5 h-3.5 text-green-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                {copiedState.bmi ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <SyntaxHighlighter
              language="python"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1.5rem',
                background: 'transparent',
                fontSize: '0.9rem',
              }}
              showLineNumbers={true}
              wrapLines={true}>
              {activeTab.bmi === 'simple' ? bmiCodeSimple : bmiCodeFunction}
            </SyntaxHighlighter>
          </div>
        </section>
      </div>
    </div>
  )
}

// Reusable Card Component
const FeatureCard = ({ icon, title, text }) => (
  <div className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-blue-500/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm">{text}</p>
      </div>
    </div>
  </div>
)

export default PythonProjects
