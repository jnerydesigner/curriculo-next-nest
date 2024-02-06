import AdminContent from '../../components/admin-content'
interface AdminContentProps {
  children?: React.ReactNode
}
const Formation: React.FC<AdminContentProps> = ({ children }) => {
  return <AdminContent>{children}</AdminContent>
}

export default Formation
