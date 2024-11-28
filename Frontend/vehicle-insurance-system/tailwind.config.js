module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        // Modern, vibrant color palette
        primary: {
          50: '#EFF6FF',   // Lightest
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',  // Soft Blue
          400: '#60A5FA',  // Mid Blue
          500: '#3B82F6',  // Brand Blue
          600: '#2563EB',  // Deep Blue
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A'   // Darkest
        },
        secondary: {
          50: '#ECFDF5',   // Mint Green Lightest
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',  // Soft Green
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B'
        },
        neutral: {
          50: '#F9FAFB',   // Almost White
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827'
        },
        accent: {
          50: '#FFF5F5',
          100: '#FFE5E5',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#FF6B6B',  // Vibrant Coral Red
          500: '#FF4757',
          600: '#F03E3E',
          700: '#E03131',
          800: '#C92A2A',
          900: '#B02121'
        }
      },
      // Add some modern box shadows
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hard': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      // Modern gradient backgrounds
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #3B82F6, #1D4ED8)',
        'gradient-secondary': 'linear-gradient(to right, #10B981, #047857)',
        'gradient-accent': 'linear-gradient(to right, #FF4757, #F03E3E)'
      }
    },
  },
  plugins: [],
}