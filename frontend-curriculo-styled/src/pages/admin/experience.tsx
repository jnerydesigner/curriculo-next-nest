import AdminContent from '../../components/admin-content'
interface AdminContentProps {
  children?: React.ReactNode
}
const Experience: React.FC<AdminContentProps> = ({ children }) => {
  return <AdminContent>{children}</AdminContent>
}

export default Experience
