import { useSelector } from 'react-redux'
import TreeRoot from './TreeRoot'
import ModalWindow from '../shared/ModalWindow'
import useSorter from '../../hooks/useSort'
import { SORT_BY } from '../../services/constants'

const Tree = () => {
  const content = useSelector((state) => state.tree.content)
  const categories = [...new Set(content.map((item) => item.category))]
  const { result } = useSorter(content, SORT_BY.CATEGORY)
  return (
    <div className="tree-root-container">
      <TreeRoot content={content} categories={categories} />
      <ModalWindow images={result.map((item) => item.image)} />
    </div>
  )
}

export default Tree
